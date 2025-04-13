document.addEventListener("DOMContentLoaded", function () {
  let testData = [
    {
      id: 1,
      name: "Thách thức sự hiểu biết của bạn",
      categoryId: 1,
      time: 15,
      amount: 5,
      questions: [
        {
          id: 1,
          questionText: "Thủ đô của Việt Nam là gì?",
          answers: [
            { id: 1, text: "Hồ Chí Minh", isCorrect: false },
            { id: 2, text: "Đà Nẵng", isCorrect: false },
            { id: 3, text: "Hà Nội", isCorrect: true },
            { id: 4, text: "Huế", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "Trái đất quay quanh gì?",
          answers: [
            { id: 1, text: "Mặt Trăng", isCorrect: false },
            { id: 2, text: "Sao Hỏa", isCorrect: false },
            { id: 3, text: "Mặt Trời", isCorrect: true },
            { id: 4, text: "Chính nó", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText: "Loài vật nào là 'chúa sơn lâm'?",
          answers: [
            { id: 1, text: "Hổ", isCorrect: true },
            { id: 2, text: "Voi", isCorrect: false },
            { id: 3, text: "Gấu", isCorrect: false },
            { id: 4, text: "Báo", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "Nước chiếm bao nhiêu phần trăm cơ thể người?",
          answers: [
            { id: 1, text: "30%", isCorrect: false },
            { id: 2, text: "50%", isCorrect: false },
            { id: 3, text: "60%", isCorrect: true },
            { id: 4, text: "80%", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "Tháng có ít ngày nhất trong năm là?",
          answers: [
            { id: 1, text: "Tháng 2", isCorrect: true },
            { id: 2, text: "Tháng 6", isCorrect: false },
            { id: 3, text: "Tháng 9", isCorrect: false },
            { id: 4, text: "Tháng 4", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "Ngôn ngữ chính thức của Việt Nam là gì?",
          answers: [
            { id: 1, text: "Anh", isCorrect: false },
            { id: 2, text: "Trung", isCorrect: false },
            { id: 3, text: "Việt", isCorrect: true },
            { id: 4, text: "Pháp", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Con người có bao nhiêu giác quan chính?",
          answers: [
            { id: 1, text: "4", isCorrect: false },
            { id: 2, text: "5", isCorrect: true },
            { id: 3, text: "6", isCorrect: false },
            { id: 4, text: "7", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText: "Chữ cái đầu tiên trong bảng chữ cái tiếng Việt?",
          answers: [
            { id: 1, text: "Ă", isCorrect: false },
            { id: 2, text: "A", isCorrect: true },
            { id: 3, text: "Â", isCorrect: false },
            { id: 4, text: "B", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText: "Hành tinh nào gần mặt trời nhất?",
          answers: [
            { id: 1, text: "Sao Kim", isCorrect: false },
            { id: 2, text: "Sao Thủy", isCorrect: true },
            { id: 3, text: "Trái Đất", isCorrect: false },
            { id: 4, text: "Sao Hỏa", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText: "Ngày Quốc khánh Việt Nam là ngày nào?",
          answers: [
            { id: 1, text: "30/4", isCorrect: false },
            { id: 2, text: "1/5", isCorrect: false },
            { id: 3, text: "2/9", isCorrect: true },
            { id: 4, text: "1/6", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Khám phá trí tuệ Toán học",
      categoryId: 2,
      time: 30,
      amount: 4,
      questions: [
        {
          id: 1,
          questionText: "Kết quả của 7 x 8 là gì?",
          answers: [
            { id: 1, text: "56", isCorrect: true },
            { id: 2, text: "54", isCorrect: false },
            { id: 3, text: "64", isCorrect: false },
            { id: 4, text: "58", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "Số nào là số nguyên tố?",
          answers: [
            { id: 1, text: "9", isCorrect: false },
            { id: 2, text: "15", isCorrect: false },
            { id: 3, text: "17", isCorrect: true },
            { id: 4, text: "21", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText: "Pi (π) xấp xỉ bằng bao nhiêu?",
          answers: [
            { id: 1, text: "2.14", isCorrect: false },
            { id: 2, text: "3.14", isCorrect: true },
            { id: 3, text: "4.14", isCorrect: false },
            { id: 4, text: "3.41", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "5 mũ 2 bằng bao nhiêu?",
          answers: [
            { id: 1, text: "10", isCorrect: false },
            { id: 2, text: "15", isCorrect: false },
            { id: 3, text: "25", isCorrect: true },
            { id: 4, text: "30", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "Góc vuông có bao nhiêu độ?",
          answers: [
            { id: 1, text: "90", isCorrect: true },
            { id: 2, text: "180", isCorrect: false },
            { id: 3, text: "45", isCorrect: false },
            { id: 4, text: "60", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "Phép chia 10 : 2 bằng?",
          answers: [
            { id: 1, text: "4", isCorrect: false },
            { id: 2, text: "5", isCorrect: true },
            { id: 3, text: "6", isCorrect: false },
            { id: 4, text: "8", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Tổng của các số từ 1 đến 5 là?",
          answers: [
            { id: 1, text: "10", isCorrect: false },
            { id: 2, text: "15", isCorrect: true },
            { id: 3, text: "20", isCorrect: false },
            { id: 4, text: "25", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText: "Số thập phân 0.5 tương đương với phân số nào?",
          answers: [
            { id: 1, text: "1/4", isCorrect: false },
            { id: 2, text: "1/2", isCorrect: true },
            { id: 3, text: "2/3", isCorrect: false },
            { id: 4, text: "3/4", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText: "Trong một tam giác đều, mỗi góc bao nhiêu độ?",
          answers: [
            { id: 1, text: "45", isCorrect: false },
            { id: 2, text: "60", isCorrect: true },
            { id: 3, text: "90", isCorrect: false },
            { id: 4, text: "120", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText: "Số lớn nhất có 2 chữ số là?",
          answers: [
            { id: 1, text: "98", isCorrect: false },
            { id: 2, text: "99", isCorrect: true },
            { id: 3, text: "100", isCorrect: false },
            { id: 4, text: "89", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Khám phá thế giới Khoa học",
      categoryId: 3,
      time: 20,
      amount: 3,
      questions: [
        {
          id: 1,
          questionText: "Nước sôi ở bao nhiêu độ C?",
          answers: [
            { id: 1, text: "90°C", isCorrect: false },
            { id: 2, text: "100°C", isCorrect: true },
            { id: 3, text: "80°C", isCorrect: false },
            { id: 4, text: "120°C", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "Hành tinh nào được gọi là Hành tinh Đỏ?",
          answers: [
            { id: 1, text: "Sao Kim", isCorrect: false },
            { id: 2, text: "Sao Mộc", isCorrect: false },
            { id: 3, text: "Sao Hỏa", isCorrect: true },
            { id: 4, text: "Sao Thủy", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText: "Âm thanh truyền qua môi trường nào tốt nhất?",
          answers: [
            { id: 1, text: "Chân không", isCorrect: false },
            { id: 2, text: "Không khí", isCorrect: false },
            { id: 3, text: "Nước", isCorrect: false },
            { id: 4, text: "Rắn", isCorrect: true },
          ],
        },
        {
          id: 4,
          questionText: "Cơ quan nào giúp con người hô hấp?",
          answers: [
            { id: 1, text: "Tim", isCorrect: false },
            { id: 2, text: "Gan", isCorrect: false },
            { id: 3, text: "Phổi", isCorrect: true },
            { id: 4, text: "Thận", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "Chất nào sau đây là kim loại?",
          answers: [
            { id: 1, text: "Nhôm", isCorrect: true },
            { id: 2, text: "Nước", isCorrect: false },
            { id: 3, text: "Cát", isCorrect: false },
            { id: 4, text: "Gỗ", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "Tế bào là đơn vị cơ bản của?",
          answers: [
            { id: 1, text: "Sinh vật", isCorrect: true },
            { id: 2, text: "Nước", isCorrect: false },
            { id: 3, text: "Không khí", isCorrect: false },
            { id: 4, text: "Ánh sáng", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Tia nào có thể gây cháy da?",
          answers: [
            { id: 1, text: "Tia UV", isCorrect: true },
            { id: 2, text: "Tia X", isCorrect: false },
            { id: 3, text: "Tia hồng ngoại", isCorrect: false },
            { id: 4, text: "Tia gamma", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText: "Đơn vị đo cường độ dòng điện là?",
          answers: [
            { id: 1, text: "Volt", isCorrect: false },
            { id: 2, text: "Ampe", isCorrect: true },
            { id: 3, text: "Watt", isCorrect: false },
            { id: 4, text: "Ohm", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText: "Loài vật nào là động vật có vú?",
          answers: [
            { id: 1, text: "Chim cánh cụt", isCorrect: false },
            { id: 2, text: "Cá mập", isCorrect: false },
            { id: 3, text: "Cá heo", isCorrect: true },
            { id: 4, text: "Ếch", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText: "Mặt trời là gì?",
          answers: [
            { id: 1, text: "Hành tinh", isCorrect: false },
            { id: 2, text: "Vệ tinh", isCorrect: false },
            { id: 3, text: "Ngôi sao", isCorrect: true },
            { id: 4, text: "Thiên thạch", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Hành trình xuyên suốt Lịch sử",
      categoryId: 4,
      time: 20,
      amount: 2,
      questions: [
        {
          id: 1,
          questionText: "Ngày Quốc khánh Việt Nam là ngày nào?",
          answers: [
            { id: 1, text: "30/4", isCorrect: false },
            { id: 2, text: "2/9", isCorrect: true },
            { id: 3, text: "19/8", isCorrect: false },
            { id: 4, text: "1/5", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "Ai là người sáng lập nước Việt Nam Dân chủ Cộng hòa?",
          answers: [
            { id: 1, text: "Trần Hưng Đạo", isCorrect: false },
            { id: 2, text: "Hồ Chí Minh", isCorrect: true },
            { id: 3, text: "Lê Lợi", isCorrect: false },
            { id: 4, text: "Ngô Quyền", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText: "Chiến thắng Điện Biên Phủ diễn ra vào năm nào?",
          answers: [
            { id: 1, text: "1945", isCorrect: false },
            { id: 2, text: "1954", isCorrect: true },
            { id: 3, text: "1968", isCorrect: false },
            { id: 4, text: "1975", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "Nhà Trần nổi tiếng với cuộc kháng chiến chống ai?",
          answers: [
            { id: 1, text: "Pháp", isCorrect: false },
            { id: 2, text: "Mông Nguyên", isCorrect: true },
            { id: 3, text: "Mỹ", isCorrect: false },
            { id: 4, text: "Thanh", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "Ai là vị vua đầu tiên của nhà Nguyễn?",
          answers: [
            { id: 1, text: "Gia Long", isCorrect: true },
            { id: 2, text: "Minh Mạng", isCorrect: false },
            { id: 3, text: "Tự Đức", isCorrect: false },
            { id: 4, text: "Khải Định", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "Lễ hội Gióng gắn với nhân vật nào?",
          answers: [
            { id: 1, text: "Thánh Gióng", isCorrect: true },
            { id: 2, text: "An Dương Vương", isCorrect: false },
            { id: 3, text: "Hai Bà Trưng", isCorrect: false },
            { id: 4, text: "Lý Thường Kiệt", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Bản Tuyên ngôn Độc lập năm 1945 được đọc tại đâu?",
          answers: [
            { id: 1, text: "Phủ Chủ tịch", isCorrect: false },
            { id: 2, text: "Quảng trường Ba Đình", isCorrect: true },
            { id: 3, text: "Nhà hát Lớn", isCorrect: false },
            { id: 4, text: "Cột cờ Hà Nội", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText:
            "Triều đại nào có thời gian tồn tại lâu nhất ở Việt Nam?",
          answers: [
            { id: 1, text: "Nhà Lý", isCorrect: false },
            { id: 2, text: "Nhà Trần", isCorrect: false },
            { id: 3, text: "Nhà Nguyễn", isCorrect: false },
            { id: 4, text: "Nhà Lê", isCorrect: true },
          ],
        },
        {
          id: 9,
          questionText:
            "Cuộc Tổng tiến công và nổi dậy Mậu Thân diễn ra năm nào?",
          answers: [
            { id: 1, text: "1954", isCorrect: false },
            { id: 2, text: "1968", isCorrect: true },
            { id: 3, text: "1972", isCorrect: false },
            { id: 4, text: "1975", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText: "Ngày miền Nam hoàn toàn giải phóng là ngày nào?",
          answers: [
            { id: 1, text: "2/9", isCorrect: false },
            { id: 2, text: "19/8", isCorrect: false },
            { id: 3, text: "30/4", isCorrect: true },
            { id: 4, text: "1/5", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Khám phá vẻ đẹp Văn học",
      categoryId: 5,
      time: 25,
      amount: 4,
      questions: [
        {
          id: 1,
          questionText: "Tác phẩm 'Truyện Kiều' do ai sáng tác?",
          answers: [
            { id: 1, text: "Nguyễn Du", isCorrect: true },
            { id: 2, text: "Nguyễn Trãi", isCorrect: false },
            { id: 3, text: "Hồ Xuân Hương", isCorrect: false },
            { id: 4, text: "Tố Hữu", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "Tác phẩm nào sau đây là của Nam Cao?",
          answers: [
            { id: 1, text: "Chí Phèo", isCorrect: true },
            { id: 2, text: "Tắt đèn", isCorrect: false },
            { id: 3, text: "Lão Hạc", isCorrect: false },
            { id: 4, text: "Vợ nhặt", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText: "“Bình Ngô đại cáo” là tác phẩm của ai?",
          answers: [
            { id: 1, text: "Nguyễn Trãi", isCorrect: true },
            { id: 2, text: "Nguyễn Du", isCorrect: false },
            { id: 3, text: "Chu Văn An", isCorrect: false },
            { id: 4, text: "Trần Hưng Đạo", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "Tác phẩm “Tắt đèn” nói về hoàn cảnh nào?",
          answers: [
            {
              id: 1,
              text: "Nông dân dưới ách đô hộ thực dân",
              isCorrect: true,
            },
            { id: 2, text: "Chiến tranh hiện đại", isCorrect: false },
            { id: 3, text: "Tình yêu lãng mạn", isCorrect: false },
            { id: 4, text: "Nghề làm báo", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "Nhân vật Lão Hạc là của nhà văn nào?",
          answers: [
            { id: 1, text: "Ngô Tất Tố", isCorrect: false },
            { id: 2, text: "Nam Cao", isCorrect: true },
            { id: 3, text: "Tô Hoài", isCorrect: false },
            { id: 4, text: "Nguyễn Công Hoan", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "“Chiếc lược ngà” là truyện ngắn của tác giả nào?",
          answers: [
            { id: 1, text: "Nguyễn Quang Sáng", isCorrect: true },
            { id: 2, text: "Nguyễn Huy Tưởng", isCorrect: false },
            { id: 3, text: "Nguyễn Minh Châu", isCorrect: false },
            { id: 4, text: "Nguyễn Nhật Ánh", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Thể thơ nào thường dùng trong thơ Đường luật?",
          answers: [
            { id: 1, text: "Thất ngôn bát cú", isCorrect: true },
            { id: 2, text: "Lục bát", isCorrect: false },
            { id: 3, text: "Song thất lục bát", isCorrect: false },
            { id: 4, text: "Tự do", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText: "Tác phẩm “Làng” của Kim Lân viết về chủ đề gì?",
          answers: [
            { id: 1, text: "Nông thôn đổi mới", isCorrect: false },
            { id: 2, text: "Chiến tranh và lòng yêu nước", isCorrect: true },
            { id: 3, text: "Tình cảm cha con", isCorrect: false },
            { id: 4, text: "Giáo dục học đường", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText: "Tác giả của bài thơ “Sang thu” là ai?",
          answers: [
            { id: 1, text: "Nguyễn Khoa Điềm", isCorrect: false },
            { id: 2, text: "Hữu Thỉnh", isCorrect: true },
            { id: 3, text: "Xuân Quỳnh", isCorrect: false },
            { id: 4, text: "Nguyễn Duy", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText: "Tác phẩm nào sau đây KHÔNG thuộc văn học Việt Nam?",
          answers: [
            { id: 1, text: "Truyện Kiều", isCorrect: false },
            { id: 2, text: "Lão Hạc", isCorrect: false },
            { id: 3, text: "Romeo và Juliet", isCorrect: true },
            { id: 4, text: "Chí Phèo", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Hiểu biết về Địa lý",
      categoryId: 6,
      time: 20,
      amount: 5,
      questions: [
        {
          id: 1,
          questionText: "Châu lục nào có diện tích lớn nhất thế giới?",
          answers: [
            { id: 1, text: "Châu Âu", isCorrect: false },
            { id: 2, text: "Châu Mỹ", isCorrect: false },
            { id: 3, text: "Châu Á", isCorrect: true },
            { id: 4, text: "Châu Phi", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "Đỉnh núi cao nhất thế giới là gì?",
          answers: [
            { id: 1, text: "Phan Xi Păng", isCorrect: false },
            { id: 2, text: "Everest", isCorrect: true },
            { id: 3, text: "Alps", isCorrect: false },
            { id: 4, text: "Rocky", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText: "Sông dài nhất thế giới là?",
          answers: [
            { id: 1, text: "Amazon", isCorrect: false },
            { id: 2, text: "Nile", isCorrect: true },
            { id: 3, text: "Mississippi", isCorrect: false },
            { id: 4, text: "Yangtze", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "Sa mạc lớn nhất thế giới là?",
          answers: [
            { id: 1, text: "Gobi", isCorrect: false },
            { id: 2, text: "Sahara", isCorrect: true },
            { id: 3, text: "Karakum", isCorrect: false },
            { id: 4, text: "Atacama", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "Biển Đông tiếp giáp với bao nhiêu quốc gia?",
          answers: [
            { id: 1, text: "5", isCorrect: false },
            { id: 2, text: "6", isCorrect: false },
            { id: 3, text: "9", isCorrect: true },
            { id: 4, text: "7", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "Nước nào có nhiều múi giờ nhất?",
          answers: [
            { id: 1, text: "Trung Quốc", isCorrect: false },
            { id: 2, text: "Mỹ", isCorrect: false },
            { id: 3, text: "Nga", isCorrect: true },
            { id: 4, text: "Brazil", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Khu vực nào nhiều núi lửa hoạt động nhất thế giới?",
          answers: [
            { id: 1, text: "Vành đai Thái Bình Dương", isCorrect: true },
            { id: 2, text: "Trung Đông", isCorrect: false },
            { id: 3, text: "Châu Âu", isCorrect: false },
            { id: 4, text: "Châu Phi", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText: "Kinh tuyến 0° còn gọi là gì?",
          answers: [
            { id: 1, text: "Đường xích đạo", isCorrect: false },
            { id: 2, text: "Đường Greenwich", isCorrect: true },
            { id: 3, text: "Đường chí tuyến", isCorrect: false },
            { id: 4, text: "Đường cầu vồng", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText: "Đơn vị hành chính lớn nhất của Việt Nam là gì?",
          answers: [
            { id: 1, text: "Phường", isCorrect: false },
            { id: 2, text: "Tỉnh/Thành phố", isCorrect: true },
            { id: 3, text: "Quận", isCorrect: false },
            { id: 4, text: "Xã", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText: "Quốc gia nào nằm ở cả 2 châu lục Á và Âu?",
          answers: [
            { id: 1, text: "Nga", isCorrect: true },
            { id: 2, text: "Mỹ", isCorrect: false },
            { id: 3, text: "Trung Quốc", isCorrect: false },
            { id: 4, text: "Ấn Độ", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Khám phá Thế giới Hóa học",
      categoryId: 7,
      time: 20,
      amount: 7,
      questions: [
        {
          id: 1,
          questionText: "Nguyên tố hóa học có ký hiệu là O là gì?",
          answers: [
            { id: 1, text: "Vàng", isCorrect: false },
            { id: 2, text: "Oxy", isCorrect: true },
            { id: 3, text: "Kali", isCorrect: false },
            { id: 4, text: "Hydro", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "Nước có công thức hóa học là gì?",
          answers: [
            { id: 1, text: "H2", isCorrect: false },
            { id: 2, text: "O2", isCorrect: false },
            { id: 3, text: "H2O", isCorrect: true },
            { id: 4, text: "CO2", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText: "Nguyên tử gồm 3 loại hạt: proton, electron và gì nữa?",
          answers: [
            { id: 1, text: "Ion", isCorrect: false },
            { id: 2, text: "Photon", isCorrect: false },
            { id: 3, text: "Neutron", isCorrect: true },
            { id: 4, text: "Phân tử", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "Ký hiệu hóa học của muối ăn là gì?",
          answers: [
            { id: 1, text: "NaCl", isCorrect: true },
            { id: 2, text: "KCl", isCorrect: false },
            { id: 3, text: "CaCl2", isCorrect: false },
            { id: 4, text: "MgCl2", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "Số proton trong nguyên tử xác định điều gì?",
          answers: [
            { id: 1, text: "Khối lượng", isCorrect: false },
            { id: 2, text: "Nguyên tử khối", isCorrect: false },
            { id: 3, text: "Nguyên tố", isCorrect: true },
            { id: 4, text: "Tính bền vững", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "Chất nào sau đây là hợp chất?",
          answers: [
            { id: 1, text: "O2", isCorrect: false },
            { id: 2, text: "H2", isCorrect: false },
            { id: 3, text: "H2O", isCorrect: true },
            { id: 4, text: "N2", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Khí CO2 có vai trò gì trong thực vật?",
          answers: [
            { id: 1, text: "Gây độc", isCorrect: false },
            { id: 2, text: "Tạo vị", isCorrect: false },
            { id: 3, text: "Tham gia quang hợp", isCorrect: true },
            { id: 4, text: "Làm mất nước", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText: "Nguyên tố nào có ký hiệu là Fe?",
          answers: [
            { id: 1, text: "Chì", isCorrect: false },
            { id: 2, text: "Sắt", isCorrect: true },
            { id: 3, text: "Kẽm", isCorrect: false },
            { id: 4, text: "Niken", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText: "Phản ứng hóa học nào tạo ra nước?",
          answers: [
            { id: 1, text: "H2 + O2", isCorrect: true },
            { id: 2, text: "CO2 + O2", isCorrect: false },
            { id: 3, text: "N2 + H2", isCorrect: false },
            { id: 4, text: "Na + Cl2", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText: "Người ta dùng chất nào để làm trắng răng?",
          answers: [
            { id: 1, text: "Hydro Peroxide", isCorrect: true },
            { id: 2, text: "Nước cất", isCorrect: false },
            { id: 3, text: "CO2", isCorrect: false },
            { id: 4, text: "Muối ăn", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Khám phá Cơ thể và Sinh giới",
      categoryId: 8,
      time: 20,
      amount: 3,
      questions: [
        {
          id: 1,
          questionText: "Đơn vị cấu tạo cơ bản của sự sống là gì?",
          answers: [
            { id: 1, text: "Tế bào", isCorrect: true },
            { id: 2, text: "Mô", isCorrect: false },
            { id: 3, text: "Cơ quan", isCorrect: false },
            { id: 4, text: "Hệ cơ quan", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "ADN mang thông tin di truyền dưới dạng gì?",
          answers: [
            { id: 1, text: "Protein", isCorrect: false },
            { id: 2, text: "Enzyme", isCorrect: false },
            { id: 3, text: "Gen", isCorrect: true },
            { id: 4, text: "Nhiễm sắc thể", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText: "Bộ phận nào giúp cây hấp thụ nước?",
          answers: [
            { id: 1, text: "Lá", isCorrect: false },
            { id: 2, text: "Rễ", isCorrect: true },
            { id: 3, text: "Thân", isCorrect: false },
            { id: 4, text: "Hoa", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "Tim người có bao nhiêu ngăn?",
          answers: [
            { id: 1, text: "2", isCorrect: false },
            { id: 2, text: "3", isCorrect: false },
            { id: 3, text: "4", isCorrect: true },
            { id: 4, text: "5", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "Cơ quan nào lọc máu trong cơ thể người?",
          answers: [
            { id: 1, text: "Tim", isCorrect: false },
            { id: 2, text: "Gan", isCorrect: false },
            { id: 3, text: "Thận", isCorrect: true },
            { id: 4, text: "Phổi", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "Sinh vật nào sau đây là động vật có vú?",
          answers: [
            { id: 1, text: "Ếch", isCorrect: false },
            { id: 2, text: "Chim cánh cụt", isCorrect: false },
            { id: 3, text: "Cá voi", isCorrect: true },
            { id: 4, text: "Rắn", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Quang hợp xảy ra ở bộ phận nào của cây?",
          answers: [
            { id: 1, text: "Rễ", isCorrect: false },
            { id: 2, text: "Thân", isCorrect: false },
            { id: 3, text: "Lá", isCorrect: true },
            { id: 4, text: "Hoa", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText: "Nhiễm sắc thể nằm ở đâu trong tế bào?",
          answers: [
            { id: 1, text: "Màng tế bào", isCorrect: false },
            { id: 2, text: "Tế bào chất", isCorrect: false },
            { id: 3, text: "Nhân tế bào", isCorrect: true },
            { id: 4, text: "Ti thể", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText: "Sinh vật nào sau đây là đơn bào?",
          answers: [
            { id: 1, text: "Tảo lục", isCorrect: false },
            { id: 2, text: "Vi khuẩn", isCorrect: true },
            { id: 3, text: "Giun đất", isCorrect: false },
            { id: 4, text: "Cá", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText: "Chất nào sau đây là enzim tiêu hóa trong miệng?",
          answers: [
            { id: 1, text: "Pepsin", isCorrect: false },
            { id: 2, text: "Amylase", isCorrect: true },
            { id: 3, text: "Trypsin", isCorrect: false },
            { id: 4, text: "Lipase", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 9,
      name: "Khám phá thế giới Vật lý",
      categoryId: 9,
      time: 25,
      amount: 5,
      questions: [
        {
          id: 1,
          questionText: "Vận tốc được đo bằng đơn vị nào?",
          answers: [
            { id: 1, text: "mét", isCorrect: false },
            { id: 2, text: "giây", isCorrect: false },
            { id: 3, text: "m/s", isCorrect: true },
            { id: 4, text: "N", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "Lực hấp dẫn là lực giữa các vật có gì?",
          answers: [
            { id: 1, text: "Khối lượng", isCorrect: true },
            { id: 2, text: "Điện tích", isCorrect: false },
            { id: 3, text: "Tốc độ", isCorrect: false },
            { id: 4, text: "Thể tích", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText: "Ai là người phát hiện định luật vạn vật hấp dẫn?",
          answers: [
            { id: 1, text: "Einstein", isCorrect: false },
            { id: 2, text: "Newton", isCorrect: true },
            { id: 3, text: "Galilei", isCorrect: false },
            { id: 4, text: "Tesla", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "Nhiệt độ được đo bằng đơn vị gì trong hệ SI?",
          answers: [
            { id: 1, text: "Celsius", isCorrect: false },
            { id: 2, text: "Fahrenheit", isCorrect: false },
            { id: 3, text: "Kelvin", isCorrect: true },
            { id: 4, text: "Độ", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "Điện trở có đơn vị là gì?",
          answers: [
            { id: 1, text: "Ampe", isCorrect: false },
            { id: 2, text: "Vôn", isCorrect: false },
            { id: 3, text: "Watt", isCorrect: false },
            { id: 4, text: "Ohm", isCorrect: true },
          ],
        },
        {
          id: 6,
          questionText: "Ánh sáng truyền theo đường nào?",
          answers: [
            { id: 1, text: "Đường gấp khúc", isCorrect: false },
            { id: 2, text: "Đường vòng", isCorrect: false },
            { id: 3, text: "Đường thẳng", isCorrect: true },
            { id: 4, text: "Đường tròn", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Dòng điện là gì?",
          answers: [
            { id: 1, text: "Sự truyền nhiệt", isCorrect: false },
            {
              id: 2,
              text: "Dòng electron chuyển động có hướng",
              isCorrect: true,
            },
            { id: 3, text: "Sóng âm", isCorrect: false },
            { id: 4, text: "Năng lượng ánh sáng", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText: "Công thức tính công cơ học là gì?",
          answers: [
            { id: 1, text: "A = F / s", isCorrect: false },
            { id: 2, text: "A = F + s", isCorrect: false },
            { id: 3, text: "A = F × s", isCorrect: true },
            { id: 4, text: "A = s / F", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText: "Thấu kính hội tụ có hình dạng gì?",
          answers: [
            { id: 1, text: "Mỏng ở giữa, dày ở mép", isCorrect: false },
            { id: 2, text: "Dày ở giữa, mỏng ở mép", isCorrect: true },
            { id: 3, text: "Phẳng", isCorrect: false },
            { id: 4, text: "Lồi hai mặt", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText: "Âm thanh không thể truyền qua môi trường nào?",
          answers: [
            { id: 1, text: "Không khí", isCorrect: false },
            { id: 2, text: "Rắn", isCorrect: false },
            { id: 3, text: "Nước", isCorrect: false },
            { id: 4, text: "Chân không", isCorrect: true },
          ],
        },
      ],
    },
    {
      id: 10,
      name: "Hiểu biết về Công nghệ hiện đại",
      categoryId: 10,
      time: 15,
      amount: 4,
      questions: [
        {
          id: 1,
          questionText: "HTML là viết tắt của?",
          answers: [
            {
              id: 1,
              text: "Hyperlinks and Text Markup Language",
              isCorrect: false,
            },
            { id: 2, text: "Home Tool Markup Language", isCorrect: false },
            { id: 3, text: "HyperText Markup Language", isCorrect: true },
            { id: 4, text: "Hyper Tool Markup Language", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "CPU là gì trong máy tính?",
          answers: [
            { id: 1, text: "Bộ xử lý trung tâm", isCorrect: true },
            { id: 2, text: "Thẻ nhớ", isCorrect: false },
            { id: 3, text: "Màn hình", isCorrect: false },
            { id: 4, text: "Ổ cứng", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText: "Hệ điều hành phổ biến nhất thế giới là?",
          answers: [
            { id: 1, text: "macOS", isCorrect: false },
            { id: 2, text: "Linux", isCorrect: false },
            { id: 3, text: "Windows", isCorrect: true },
            { id: 4, text: "Ubuntu", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "Ngôn ngữ lập trình phổ biến để làm web?",
          answers: [
            { id: 1, text: "Python", isCorrect: false },
            { id: 2, text: "JavaScript", isCorrect: true },
            { id: 3, text: "C", isCorrect: false },
            { id: 4, text: "Java", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "Ai là người sáng lập Facebook?",
          answers: [
            { id: 1, text: "Elon Musk", isCorrect: false },
            { id: 2, text: "Bill Gates", isCorrect: false },
            { id: 3, text: "Mark Zuckerberg", isCorrect: true },
            { id: 4, text: "Steve Jobs", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "Google Chrome là gì?",
          answers: [
            { id: 1, text: "Trình duyệt web", isCorrect: true },
            { id: 2, text: "Phần mềm chỉnh sửa ảnh", isCorrect: false },
            { id: 3, text: "Hệ điều hành", isCorrect: false },
            { id: 4, text: "Ứng dụng nhắn tin", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Bluetooth dùng để làm gì?",
          answers: [
            { id: 1, text: "Tăng tốc internet", isCorrect: false },
            { id: 2, text: "Kết nối thiết bị không dây", isCorrect: true },
            { id: 3, text: "Nghe nhạc", isCorrect: false },
            { id: 4, text: "Phát WiFi", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText: "SSD nhanh hơn HDD đúng không?",
          answers: [
            { id: 1, text: "Đúng", isCorrect: true },
            { id: 2, text: "Sai", isCorrect: false },
            { id: 3, text: "Không chắc", isCorrect: false },
            { id: 4, text: "Tùy hệ điều hành", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText: "Email là viết tắt của?",
          answers: [
            { id: 1, text: "Electronic Mail", isCorrect: true },
            { id: 2, text: "Easy Mail", isCorrect: false },
            { id: 3, text: "Elastic Mail", isCorrect: false },
            { id: 4, text: "Emergency Mail", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText: "Ứng dụng Zoom dùng để?",
          answers: [
            { id: 1, text: "Mua sắm", isCorrect: false },
            { id: 2, text: "Video call", isCorrect: true },
            { id: 3, text: "Chơi game", isCorrect: false },
            { id: 4, text: "Nghe nhạc", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 11,
      name: "Khám phá Thế giới Nghệ thuật",
      categoryId: 11,
      time: 25,
      amount: 6,
      questions: [
        {
          id: 1,
          questionText: "Ai là tác giả của bức tranh Mona Lisa?",
          answers: [
            { id: 1, text: "Vincent van Gogh", isCorrect: false },
            { id: 2, text: "Leonardo da Vinci", isCorrect: true },
            { id: 3, text: "Pablo Picasso", isCorrect: false },
            { id: 4, text: "Michelangelo", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText:
            "Trường phái nghệ thuật nào đặc trưng bởi sự mơ hồ và ánh sáng?",
          answers: [
            { id: 1, text: "Hiện thực", isCorrect: false },
            { id: 2, text: "Biểu hiện", isCorrect: false },
            { id: 3, text: "Lập thể", isCorrect: false },
            { id: 4, text: "Ấn tượng", isCorrect: true },
          ],
        },
        {
          id: 3,
          questionText: "Michelangelo nổi tiếng với lĩnh vực nào?",
          answers: [
            { id: 1, text: "Điêu khắc", isCorrect: true },
            { id: 2, text: "Nhiếp ảnh", isCorrect: false },
            { id: 3, text: "Thời trang", isCorrect: false },
            { id: 4, text: "Thiết kế web", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "Bức 'Đêm đầy sao' là của ai?",
          answers: [
            { id: 1, text: "Claude Monet", isCorrect: false },
            { id: 2, text: "Vincent van Gogh", isCorrect: true },
            { id: 3, text: "Salvador Dali", isCorrect: false },
            { id: 4, text: "Rembrandt", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "Mỹ thuật là gì?",
          answers: [
            { id: 1, text: "Nghệ thuật điện ảnh", isCorrect: false },
            { id: 2, text: "Nghệ thuật tạo hình", isCorrect: true },
            { id: 3, text: "Nghệ thuật âm nhạc", isCorrect: false },
            { id: 4, text: "Nghệ thuật sân khấu", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "Tranh sơn dầu được vẽ trên gì?",
          answers: [
            { id: 1, text: "Giấy", isCorrect: false },
            { id: 2, text: "Gỗ", isCorrect: false },
            { id: 3, text: "Vải canvas", isCorrect: true },
            { id: 4, text: "Thép", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Tượng Nữ thần Tự do là biểu tượng của quốc gia nào?",
          answers: [
            { id: 1, text: "Pháp", isCorrect: false },
            { id: 2, text: "Mỹ", isCorrect: true },
            { id: 3, text: "Anh", isCorrect: false },
            { id: 4, text: "Ý", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText: "Pablo Picasso gắn liền với trường phái nào?",
          answers: [
            { id: 1, text: "Siêu thực", isCorrect: false },
            { id: 2, text: "Lập thể", isCorrect: true },
            { id: 3, text: "Trừu tượng", isCorrect: false },
            { id: 4, text: "Ấn tượng", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText: "Tháp Eiffel là công trình nghệ thuật ở đâu?",
          answers: [
            { id: 1, text: "Paris", isCorrect: true },
            { id: 2, text: "London", isCorrect: false },
            { id: 3, text: "Berlin", isCorrect: false },
            { id: 4, text: "New York", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText: "Nghệ thuật graffiti thường được vẽ ở đâu?",
          answers: [
            { id: 1, text: "Sân khấu", isCorrect: false },
            { id: 2, text: "Tường công cộng", isCorrect: true },
            { id: 3, text: "Giấy A4", isCorrect: false },
            { id: 4, text: "Tivi", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 12,
      name: "Chinh phục kiến thức Thể thao",
      categoryId: 12,
      time: 25,
      amount: 2,
      questions: [
        {
          id: 1,
          questionText: "Môn thể thao nào được mệnh danh là 'vua'?",
          answers: [
            { id: 1, text: "Bóng rổ", isCorrect: false },
            { id: 2, text: "Bóng chuyền", isCorrect: false },
            { id: 3, text: "Bóng đá", isCorrect: true },
            { id: 4, text: "Tennis", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "Sân bóng đá tiêu chuẩn có bao nhiêu cầu thủ mỗi đội?",
          answers: [
            { id: 1, text: "9", isCorrect: false },
            { id: 2, text: "10", isCorrect: false },
            { id: 3, text: "11", isCorrect: true },
            { id: 4, text: "12", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText: "Olympic diễn ra bao nhiêu năm một lần?",
          answers: [
            { id: 1, text: "2 năm", isCorrect: false },
            { id: 2, text: "3 năm", isCorrect: false },
            { id: 3, text: "4 năm", isCorrect: true },
            { id: 4, text: "5 năm", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "Quốc gia nào tổ chức World Cup 2022?",
          answers: [
            { id: 1, text: "Nga", isCorrect: false },
            { id: 2, text: "Qatar", isCorrect: true },
            { id: 3, text: "Brazil", isCorrect: false },
            { id: 4, text: "Pháp", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "Tennis sử dụng loại bóng nào?",
          answers: [
            { id: 1, text: "Bóng cao su", isCorrect: false },
            { id: 2, text: "Bóng cứng", isCorrect: false },
            { id: 3, text: "Bóng nỉ", isCorrect: true },
            { id: 4, text: "Bóng xốp", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "Cristiano Ronaldo đến từ quốc gia nào?",
          answers: [
            { id: 1, text: "Tây Ban Nha", isCorrect: false },
            { id: 2, text: "Bồ Đào Nha", isCorrect: true },
            { id: 3, text: "Brazil", isCorrect: false },
            { id: 4, text: "Anh", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Môn thể thao nào dùng vợt và cầu?",
          answers: [
            { id: 1, text: "Bóng bàn", isCorrect: false },
            { id: 2, text: "Tennis", isCorrect: false },
            { id: 3, text: "Cầu lông", isCorrect: true },
            { id: 4, text: "Bóng chuyền", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText: "NBA là giải đấu bóng rổ nổi tiếng ở đâu?",
          answers: [
            { id: 1, text: "Anh", isCorrect: false },
            { id: 2, text: "Trung Quốc", isCorrect: false },
            { id: 3, text: "Mỹ", isCorrect: true },
            { id: 4, text: "Pháp", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText: "Môn thể thao nào có kỹ thuật 'butterfly'?",
          answers: [
            { id: 1, text: "Bơi lội", isCorrect: true },
            { id: 2, text: "Tennis", isCorrect: false },
            { id: 3, text: "Võ thuật", isCorrect: false },
            { id: 4, text: "Cầu lông", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText: "Bóng đá được thi đấu trên mặt sân gì?",
          answers: [
            { id: 1, text: "Gỗ", isCorrect: false },
            { id: 2, text: "Sắt", isCorrect: false },
            { id: 3, text: "Cỏ", isCorrect: true },
            { id: 4, text: "Xi măng", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 13,
      name: "Thế giới diệu kỳ của Âm nhạc",
      categoryId: 13,
      time: 15,
      amount: 1,
      questions: [
        {
          id: 1,
          questionText: "Nốt nhạc đầu tiên trong âm giai là gì?",
          answers: [
            { id: 1, text: "Mi", isCorrect: false },
            { id: 2, text: "Đô", isCorrect: true },
            { id: 3, text: "Fa", isCorrect: false },
            { id: 4, text: "La", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText:
            "Âm nhạc cổ điển phương Tây phát triển mạnh ở thời kỳ nào?",
          answers: [
            { id: 1, text: "Phục Hưng", isCorrect: true },
            { id: 2, text: "Hiện đại", isCorrect: false },
            { id: 3, text: "Tiền sử", isCorrect: false },
            { id: 4, text: "Trung cổ", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText: "Nhạc cụ nào có phím đen và trắng?",
          answers: [
            { id: 1, text: "Đàn piano", isCorrect: true },
            { id: 2, text: "Guitar", isCorrect: false },
            { id: 3, text: "Violin", isCorrect: false },
            { id: 4, text: "Trống", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "Nhạc sĩ Beethoven thuộc quốc gia nào?",
          answers: [
            { id: 1, text: "Pháp", isCorrect: false },
            { id: 2, text: "Đức", isCorrect: true },
            { id: 3, text: "Ý", isCorrect: false },
            { id: 4, text: "Nga", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "Nhạc pop là thể loại nhạc gì?",
          answers: [
            { id: 1, text: "Dân gian", isCorrect: false },
            { id: 2, text: "Phổ biến đại chúng", isCorrect: true },
            { id: 3, text: "Rock cổ điển", isCorrect: false },
            { id: 4, text: "Truyền thống", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "Nhạc cụ nào thường được dùng trong nhạc rock?",
          answers: [
            { id: 1, text: "Đàn tranh", isCorrect: false },
            { id: 2, text: "Guitar điện", isCorrect: true },
            { id: 3, text: "Sáo", isCorrect: false },
            { id: 4, text: "Violin", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Ca sĩ nổi tiếng với bài hát 'Shape of You' là ai?",
          answers: [
            { id: 1, text: "Bruno Mars", isCorrect: false },
            { id: 2, text: "Ed Sheeran", isCorrect: true },
            { id: 3, text: "Adele", isCorrect: false },
            { id: 4, text: "Justin Bieber", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText: "Tập hợp của các nốt nhạc gọi là gì?",
          answers: [
            { id: 1, text: "Hợp âm", isCorrect: true },
            { id: 2, text: "Tông", isCorrect: false },
            { id: 3, text: "Nốt đơn", isCorrect: false },
            { id: 4, text: "Ký hiệu", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText:
            "Ca sĩ nào nổi tiếng với biệt danh 'Ông hoàng nhạc pop'?",
          answers: [
            { id: 1, text: "Elvis Presley", isCorrect: false },
            { id: 2, text: "Michael Jackson", isCorrect: true },
            { id: 3, text: "Freddie Mercury", isCorrect: false },
            { id: 4, text: "John Lennon", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText: "Ký hiệu '𝄞' gọi là gì trong âm nhạc?",
          answers: [
            { id: 1, text: "Nốt Sol", isCorrect: false },
            { id: 2, text: "Khóa Sol", isCorrect: true },
            { id: 3, text: "Hợp âm Sol", isCorrect: false },
            { id: 4, text: "Dấu lặng", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 14,
      name: "Thế giới Giải trí Hấp Dẫn",
      categoryId: 14,
      time: 25,
      amount: 0,
      questions: [
        {
          id: 1,
          questionText: "Nhân vật nào nổi tiếng trong loạt phim Harry Potter?",
          answers: [
            { id: 1, text: "Frodo Baggins", isCorrect: false },
            { id: 2, text: "Harry Potter", isCorrect: true },
            { id: 3, text: "Percy Jackson", isCorrect: false },
            { id: 4, text: "Katniss Everdeen", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText:
            "Ai là người dẫn chương trình 'Ai là triệu phú' bản Việt đầu tiên?",
          answers: [
            { id: 1, text: "Trấn Thành", isCorrect: false },
            { id: 2, text: "Lại Văn Sâm", isCorrect: true },
            { id: 3, text: "Xuân Bắc", isCorrect: false },
            { id: 4, text: "Đức Phúc", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText:
            "Nhân vật hoạt hình nổi tiếng với chiếc quần vuông màu nâu là ai?",
          answers: [
            { id: 1, text: "SpongeBob SquarePants", isCorrect: true },
            { id: 2, text: "Mickey Mouse", isCorrect: false },
            { id: 3, text: "Tom", isCorrect: false },
            { id: 4, text: "Jerry", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText:
            "Bộ phim nào sau đây không thuộc Vũ trụ điện ảnh Marvel (MCU)?",
          answers: [
            { id: 1, text: "Iron Man", isCorrect: false },
            { id: 2, text: "Avengers: Endgame", isCorrect: false },
            { id: 3, text: "The Batman", isCorrect: true },
            { id: 4, text: "Doctor Strange", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText:
            "Người máy nổi tiếng trong loạt phim Transformers là ai?",
          answers: [
            { id: 1, text: "R2-D2", isCorrect: false },
            { id: 2, text: "Wall-E", isCorrect: false },
            { id: 3, text: "Optimus Prime", isCorrect: true },
            { id: 4, text: "Baymax", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "Game nào sau đây thuộc thể loại battle royale?",
          answers: [
            { id: 1, text: "Minecraft", isCorrect: false },
            { id: 2, text: "Call of Duty: Warzone", isCorrect: true },
            { id: 3, text: "The Sims", isCorrect: false },
            { id: 4, text: "Stardew Valley", isCorrect: false },
          ],
        },
        {
          id: 7,
          questionText: "Ca sĩ nào nổi tiếng với bài hát 'Blinding Lights'?",
          answers: [
            { id: 1, text: "Justin Bieber", isCorrect: false },
            { id: 2, text: "The Weeknd", isCorrect: true },
            { id: 3, text: "Drake", isCorrect: false },
            { id: 4, text: "Shawn Mendes", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText: "Trò chơi nào sau đây thuộc dòng game thể thao?",
          answers: [
            { id: 1, text: "FIFA", isCorrect: true },
            { id: 2, text: "Among Us", isCorrect: false },
            { id: 3, text: "Genshin Impact", isCorrect: false },
            { id: 4, text: "Roblox", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText: "Nam diễn viên thủ vai 'Người Sắt' trong MCU là ai?",
          answers: [
            { id: 1, text: "Chris Evans", isCorrect: false },
            { id: 2, text: "Robert Downey Jr.", isCorrect: true },
            { id: 3, text: "Tom Holland", isCorrect: false },
            { id: 4, text: "Chris Hemsworth", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText:
            "TV show Việt Nam nổi tiếng với khẩu hiệu 'Vượt lên chính mình' là?",
          answers: [
            { id: 1, text: "Giọng hát Việt", isCorrect: false },
            { id: 2, text: "Đường lên đỉnh Olympia", isCorrect: false },
            { id: 3, text: "Vượt lên chính mình", isCorrect: true },
            { id: 4, text: "Chinh phục đỉnh cao", isCorrect: false },
          ],
        },
      ],
    },
  ];

  const testTableBody = document.getElementById("testTableBody");
  const saveCategoryBtn = document.getElementById("saveCategoryBtn");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const categoryModal = document.getElementById("categoryModal");
  const confirmDeleteModal = document.getElementById("confirmDeleteModal");

  let redirectUrl = "";
  let searchKeyword = "";
  let sortOption = "";
  let itemsPerPage = 8;
  let currentPage = 1;

  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  // Hàm hiển thị tên danh mục bằng emoji + tên
  function getCategoryDisplay(categoryId) {
    const category = categories.find((c) => c.id === categoryId);
    return category ? `${category.emoji} ${category.name}` : "Không xác định";
  }

  function init() {
    if (!localStorage.getItem("testData")) {
      localStorage.setItem("testData", JSON.stringify(testData));
    }

    testData = JSON.parse(localStorage.getItem("testData"));

    bindStaticEvents();
    renderTests();
    updatePagination();
  }
// Gắn sự kiện cố định cho nút thêm, đóng modal, xác nhận redirect
  function bindStaticEvents() {
    document.getElementById("btnAddTest").addEventListener("click", handleAddTest);

    saveCategoryBtn.addEventListener("click", function () {
      if (redirectUrl){
        window.location.href = redirectUrl
        };
    });

    document.querySelectorAll(".btn-close, .btn-secondary").forEach((btn) => {
      btn.addEventListener("click", () => {
        hideModal(categoryModal);
        hideModal(confirmDeleteModal);
      });
    });
  }
// Sự kiện tìm kiếm theo từ khóa và sắp xếp theo tên hoặc thời gian
  document.getElementById("searchInput").addEventListener("input", function () {
    searchKeyword = this.value.toLowerCase();
    currentPage = 1;
    renderTests();
    updatePagination();
  });

  document.getElementById("sortSelect").addEventListener("change", function () {
    sortOption = this.value;
    currentPage = 1;
    renderTests();
    updatePagination();
  });
// Hàm lọc và sắp xếp bài test theo từ khóa và tùy chọn
  function getFilteredAndSortedTests() {
    let result = [...testData];

    if (searchKeyword) {
      result = result.filter((test) =>
        test.name.toLowerCase().includes(searchKeyword)
      );
    }
    if (sortOption === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "time") {
      result.sort((a, b) => a.time - b.time);
    }

    return result;
  }
// Hàm hiển thị danh sách bài test theo trang
  function renderTests() {
    const filteredTests = getFilteredAndSortedTests();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedTests = filteredTests.slice(startIndex, endIndex);

    testTableBody.innerHTML = "";

    paginatedTests.forEach((test) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${test.id}</td>
      <td>${test.name}</td>
      <td>${getCategoryDisplay(test.categoryId)}</td>
      <td>${test.questions.length}</td>
      <td>${test.time} phút</td>
      <td>
        <button class="btn btn-warning btn-sm btn-edit-category" data-id="${
          test.id
        }">Sửa</button>
        <button class="btn btn-danger btn-sm btn-delete" data-id="${
          test.id
        }">Xóa</button>
      </td>
    `;
      testTableBody.appendChild(row);
    });

    bindDynamicEvents();
  }
  
// Gắn sự kiện cho các nút sửa và xóa
  function bindDynamicEvents() {
    document.querySelectorAll(".btn-edit-category").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        handleEditTest(id);
      });
    });

    document.querySelectorAll(".btn-delete").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = parseInt(this.getAttribute("data-id"));
        confirmDelete(id);
      });
    });
  }
// Hàm xử lý khi người dùng nhấn sửa bài test
  function handleEditTest(id) {
    localStorage.setItem("editTestId", id);
    modalTitle.textContent = "Sửa bài test";
    modalBody.textContent = "Bạn có muốn sửa bài test không?";
    redirectUrl = "create-tests.html";
    showModal(categoryModal);
  }
// Hàm xử lý khi người dùng nhấn thêm bài test
  function handleAddTest() {
    localStorage.removeItem("editTestId");
    modalTitle.textContent = "Thêm bài test";
    modalBody.textContent = "Bạn có muốn thêm bài test không?";
    redirectUrl = "create-tests.html";
    showModal(categoryModal);
  }

  let deleteId = null;

// Hiển thị modal xác nhận xóa bài test
  function confirmDelete(id) {
    deleteId = id;
    showModal(confirmDeleteModal);
  }
// Xác nhận xóa và cập nhật danh sách
  document.getElementById("confirmDeleteBtn").onclick = function () {
    if (deleteId !== null) {
      const index = testData.findIndex(
        (test) => String(test.id) === String(deleteId)
      );

      if (index !== -1) {
        testData.splice(index, 1);
        localStorage.setItem("testData", JSON.stringify(testData));
      }
      renderTests();
      updatePagination();
      hideModal(confirmDeleteModal);
      deleteId = null;
    }
  };
// Hiển thị modal
  function showModal(modal) {
    modal.classList.add("show");
  }
// Ẩn modal
  function hideModal(modal) {
    modal.classList.remove("show");
  }
// Cập nhật phân trang 
  function updatePagination() {
    const pagination = document.querySelector(".pagination");
    const filteredTests = getFilteredAndSortedTests();
    const totalPages = Math.ceil(filteredTests.length / itemsPerPage);
    let paginationHTML = "";

    paginationHTML += `
      <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
        <a class="page-link" href="#" data-page="${currentPage - 1}">&laquo;</a>
      </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `
        <li class="page-item ${i === currentPage ? "active" : ""}">
          <a class="page-link" href="#" data-page="${i}">${i}</a>
        </li>
      `;
    }

    paginationHTML += `
      <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
        <a class="page-link" href="#" data-page="${currentPage + 1}">&raquo;</a>
      </li>
    `;

    pagination.innerHTML = paginationHTML;

    document.querySelectorAll(".page-link").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const selectedPage = parseInt(this.getAttribute("data-page"));
        changePage(selectedPage);
      });
    });
  }
// Chuyển trang khi người dùng chọn số trang
  function changePage(page) {
    const totalPages = Math.ceil(testData.length / itemsPerPage);
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
      renderTests();
      updatePagination();
    }
  }

  init();

  document.getElementById("goTo").addEventListener("click", function () {
    window.location.href = "category-manager.html";
  });
  document.getElementById("goBack").addEventListener("click", function () {
    window.location.href = "login.html";
  });
});
