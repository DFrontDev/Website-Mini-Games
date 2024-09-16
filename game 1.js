        // Array soal dan jawaban
        const questions = [
            { question: "1. Hewan apakah yang bisa tidur selama 3 tahun?", answer: "siput" },
            { question: "2. Hewan apa yang paling lambat di dunia?", answer: "kungkang" },
            { question: "3. Hewan apa yang tidak bisa melompat meskipun memiliki kaki belakang yang kuat?", answer: "gajah" },
            { question: "4. Hewan apa yang jantungnya bisa berdetak hanya 9 kali per menit saat hibernasi?", answer: "beruang" },
            { question: "5. Hewan apa yang tidak pernah sakit karena darahnya kebal terhadap penyakit?", answer: "hiu" },
            { question: "6. Hewan apa yang memiliki leher lebih panjang dari badannya, tapi tidak memiliki suara?", answer: "jerapah" },
            { question: "7. Hewan apa yang memiliki lebih banyak otot di lidahnya dibandingkan seluruh tubuh manusia?", answer: "gurita" },
            { question: "8. Hewan apa yang bisa berjalan mundur, selain bergerak maju?", answer: "kanguru" },
            { question: "9. Hewan apa yang memiliki lidah sepanjang tubuhnya?", answer: "trenggiling" },
            { question: "10. Hewan apa yang bisa bertahan hidup tanpa air selama lebih dari satu minggu?", answer: "unta" },
        ];

        // Variabel untuk skor dan indeks soal
        let currentQuestionIndex = 0;
        let score = 0;

        // Fungsi untuk menampilkan soal
        function displayQuestion() {
            document.getElementById('question').innerText = questions[currentQuestionIndex].question;
        }

        // Fungsi untuk memeriksa jawaban
        function checkAnswer() {
            const userAnswer = document.getElementById('answerInput').value.toLowerCase();
            const correctAnswer = questions[currentQuestionIndex].answer;

            if (userAnswer === correctAnswer) {
                // Tampilkan pop-up modal jika jawaban benar
                let correctAnswerModal = new bootstrap.Modal(document.getElementById('correctAnswerModal'));
                correctAnswerModal.show();

                // Tambah skor
                score += 10; 
                document.getElementById('score').innerText = score; // Update skor di papan
            } else {
                // Tampilkan pop-up modal jika jawaban salah
                let wrongAnswerModal = new bootstrap.Modal(document.getElementById('wrongAnswerModal'));
                wrongAnswerModal.show();
            }
        }

        // Fungsi untuk melanjutkan ke soal berikutnya
        function nextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
                document.getElementById('answerInput').value = ''; // Kosongkan input
            } else {
                // Game selesai
                document.getElementById('game').style.display = 'none';
                document.getElementById('finalScore').style.display = 'block';
                document.getElementById('kembali').style.display = 'block';
                document.getElementById('totalScore').innerText = score;
            }
        }

        // Event listener untuk tombol submit
        document.getElementById('submitAnswer').addEventListener('click', checkAnswer);

        // Event listener untuk tombol "Lanjut ke Soal Berikutnya" di modal jawaban benar
        document.getElementById('nextQuestionButton').addEventListener('click', nextQuestion);

        // Tampilkan soal pertama saat game dimulai
        displayQuestion();