// 1. Định nghĩa khuôn mẫu cho Lá bài
interface Card {
    id: number;
    icon: string;
    isFlipped: boolean;
    isMatched: boolean;
}

// 2. Lớp quản lý trò chơi
class MemoryGame {
    cards: Card[] = [];
    compareCards: Card[] = [];
    currentScore: number = 0;
    bestScore: number = 0; // Tạm thời để 0, em có thể phát triển thêm tính năng lưu kỷ lục sau

    constructor() {
        this.initGame();
    }

    // Khởi tạo ván mới
    initGame(): void {
        const icons = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🍍', '🥝'];
        const deck = [...icons, ...icons]; // Nhân đôi mảng để tạo cặp
        
        // Thuật toán xáo trộn mảng ngẫu nhiên
        deck.sort(() => Math.random() - 0.5);

        this.cards = deck.map((iconItem, index) => {
            return {
                id: index,
                icon: iconItem,
                isFlipped: false,
                isMatched: false,
            };
        });

        this.currentScore = 0;
        this.updateScore(); // Cập nhật lại số điểm trên màn hình
        this.renderBoard(); // Vẽ bàn cờ
    }

    // Logic lật bài
    flipCard(cardId: number): void {
        const clickedCard = this.cards.find(card => card.id === cardId);

        if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched || this.compareCards.length === 2) {
            return; 
        }

        clickedCard.isFlipped = true;
        this.compareCards.push(clickedCard);

        if (this.compareCards.length === 2) {
            this.checkMatch();
        }
    }

    // Logic kiểm tra 2 lá bài
    checkMatch(): void {
        const card1 = this.compareCards[0];
        const card2 = this.compareCards[1];

        if (card1.icon === card2.icon) {
            // Trường hợp giống nhau
            card1.isMatched = true;
            card2.isMatched = true;
            this.currentScore += 1;
            
            this.updateScore(); // Cộng điểm xong phải gọi lệnh cập nhật lên HTML
            this.compareCards = [];

            // Kiểm tra chiến thắng (8 cặp = 8 điểm)
            if (this.currentScore === 8) {
                setTimeout(() => alert("Chúc mừng! Em đã chiến thắng!"), 500);
            }
            
        } else {
            // Trường hợp khác nhau
            setTimeout(() => {
                card1.isFlipped = false;
                card2.isFlipped = false;
                this.compareCards = [];
                this.renderBoard(); // Phải gọi lại hàm render để giao diện úp lá bài xuống
            }, 1000);
        }
    }

    // Hàm phụ trợ: Cập nhật điểm lên HTML
    updateScore(): void {
        const scoreElement = document.getElementById('current-score');
        if (scoreElement) {
            scoreElement.innerText = this.currentScore.toString();
        }
    }

    // Vẽ bàn cờ lên HTML
    renderBoard(): void {
        const boardElement = document.getElementById('game-board') as HTMLDivElement;
        boardElement.innerHTML = ''; // Làm sạch bàn cờ cũ

        this.cards.forEach(card => {
            const cardElement = document.createElement('div');
            
            // TODO 1 của em: Thêm class
            cardElement.classList.add('card');

            if (card.isFlipped || card.isMatched) {
                cardElement.innerHTML = card.icon;
                cardElement.classList.add('flipped'); // Thêm màu nền sáng cho bài ngửa
            } else {
                cardElement.innerHTML = '?';
            }

            // Gắn sự kiện click
            cardElement.addEventListener('click', () => {
                // Gọi hàm lật bài và render lại
                this.flipCard(card.id);
                this.renderBoard();
            });

            boardElement.appendChild(cardElement);
        });
    }
}

// 3. Khởi chạy Trò chơi khi trang web tải xong
document.addEventListener('DOMContentLoaded', () => {
    new MemoryGame(); 
});