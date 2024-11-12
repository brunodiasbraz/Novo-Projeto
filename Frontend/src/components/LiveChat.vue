<template>
    <div>
        <button type="button" class="btn btn-warning shadow px-4 fixed-bottom-right" id="btnChat" data-bs-toggle="modal"
            data-bs-target="#liveChatModal">
            💬 Converse conosco
        </button>

        <!-- Modal -->
        <div class="modal fade" id="liveChatModal" tabindex="-1" aria-labelledby="liveChatModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="liveChatModalLabel">Message Exchange</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="box-questions">
                            <p v-if="status" id="status">{{ status }}</p>
                            <div id="history">
                                <div v-for="(item, index) in history" :key="index">
                                    <div class="box-my-message" v-if="item.type === 'user'">
                                        <p class="my-message">{{ item.text }}</p>
                                    </div>
                                    <div class="box-response-message" v-else>
                                        <p class="response-message">{{ item.text }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="input-group mb-3">
                            <input type="text" v-model="message" placeholder="Pergunte aqui..." class="form-control"
                                :disabled="isSending">
                            <button class="btn btn-outline-secondary btn-submit" id="btn-submit" @click="sendMessage"
                                :disabled="isSending"><i class="fa-regular fa-paper-plane"></i> Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            message: '',
            status: '',
            history: [],
            isSending: false,
            sessionId: 'clubao', // Coloque aqui o sessionId correto
            chatId: '553291994022@c.us' // Coloque aqui o chatId correto
        };
    },
    mounted() {
        this.fetchMessages();
        //setInterval(this.fetchMessages, 5000); // Checa novas mensagens a cada 5 segundos
    },
    methods: {
        async sendMessage() {
            if (!this.message) {
                return;
            }
            this.status = 'Carregando...';
            this.isSending = true;

            // Adiciona a mensagem do usuário ao histórico
            this.showHistory(this.message, null);

            try {
                const response = await axios.post(`http://192.168.1.128:3001/client/sendMessage/clubao`, {
                    chatId: this.chatId,
                    contentType: "string",
                    content: this.message,
                }, {
                    headers: {
                        Accept: "application/json",
                        "x-api-key": "clubao",
                        "Content-Type": "application/json",
                    }
                });

                const data = response.data;

                if (data.message.body) {
                    let r = data.message.body;
                    this.status = '';
                    // Adiciona a resposta do bot ao histórico
                    this.showHistory(null, r);
                } else {
                    throw new Error('Resposta inválida da API');
                }
            } catch (e) {
                console.log(`Error -> ${e}`);
                this.status = 'Erro, tente novamente mais tarde...';
            } finally {
                this.isSending = false;
                this.message = '';
            }
        },
        showHistory(userMessage, botResponse) {
            if (userMessage) {
                this.history.push({ type: 'user', text: userMessage });
            }
            if (botResponse) {
                this.history.push({ type: 'bot', text: botResponse });
            }

            this.$nextTick(() => {
                let historyBox = document.getElementById('history');
                historyBox.scrollTop = historyBox.scrollHeight;
            });
        },
        async fetchMessages() {
            try {
                const response = await axios.post(`http://192.168.1.128:3001/chat/fetchMessages/${this.sessionId}`, {
                    chatId: this.chatId,
                    searchOptions: {}
                }, {
                    headers: {
                        Accept: "application/json",
                        "x-api-key": "clubao",
                        "Content-Type": "application/json",
                    }
                });

                const data = response.data;

                if (data.messages && data.messages.length) {
                    data.messages.forEach(message => {
                        if (message.from !== this.chatId) { // Supondo que as mensagens recebidas têm `from` diferente do `chatId`
                            this.showHistory(null, message.body);
                        }
                    });
                }
            } catch (e) {
                console.log(`Error fetching messages -> ${e}`);
            }
        }
    }
};
</script>

<style>
.fixed-bottom-right {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
}

.box-questions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    text-align: center;
}

input {
    width: 50%;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 1rem;
}

button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
}

button:hover {
    cursor: pointer;
    transition: .4s;
    background-color: var(--gray);
}

#history {
    padding: 1rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
}

.box-my-message {
    display: flex;
    justify-content: flex-end;
}

.box-response-message {
    display: flex;
    justify-content: flex-start;
}

.my-message,
.response-message {
    padding: 1rem;
    border-radius: 10px;
    color: rgb(3, 3, 3);
    margin: 0;
}

.my-message {
    text-align: right;
    background-color: rgb(202, 202, 202);
}

.response-message {
    text-align: left;
    background-color: rgb(153, 153, 153);
}

#btnChat {
    color: #000000;
    border-radius: 10px 25px 0 25px;
    background-color: #FFDE59;
}
</style>
