const kpopGroups = [
  {
    id: 1,
    name: "BTS",
    description: "방탄소년단",
    image: "https://i.pinimg.com/736x/8b/60/dd/8b60ddcc1aaa1b84c3c08cf2a4f1d6fa.jpg",
    members: [
      { name: "RM", koreanName: "김남준", role: "리더, 래퍼", info: "1994년 9월 12일생. BTS의 리더이자 메인 래퍼.", image: "https://i.pinimg.com/736x/9e/3f/98/9e3f98e1e9a7e8c3a9f7b4e2c5d8e1f.jpg" },
      { name: "Jin", koreanName: "김석진", role: "보컬", info: "1995년 12월 4일생. 글로벌 Ambassador.", image: "https://i.pinimg.com/736x/a1/b2/c3/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.jpg" },
      { name: "SUGA", koreanName: "민윤기", role: "래퍼", info: "1993년 3월 9일생. 프로듀서이자 래퍼.", image: "https://i.pinimg.com/736x/b2/c3/d4/b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7.jpg" },
      { name: "j-hope", koreanName: "정호석", role: "래퍼", info: "1994년 2월 18일생. 메인 댄서이자 래퍼.", image: "https://i.pinimg.com/736x/c3/d4/e5/c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8.jpg" },
      { name: "Jimin", koreanName: "박지민", role: "보컬", info: "1995년 10월 13일생. 메인 댄서.", image: "https://i.pinimg.com/736x/d4/e5/f6/d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9.jpg" },
      { name: "V", koreanName: "김태형", role: "보컬", info: "1995년 12月 30일생. 보컬리스트.", image: "https://i.pinimg.com/736x/e5/f6/a7/e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.jpg" },
      { name: "Jungkook", koreanName: "전정국", role: "보컬", info: "1997년 9월 1일생. 막내이자 서브 래퍼.", image: "https://i.pinimg.com/736x/f6/a7/b8/f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1.jpg" }
    ]
  },
  {
    id: 2,
    name: "BLACKPINK",
    description: "블랙핑크",
    image: "https://i.pinimg.com/736x/4a/5b/8a/4a5b8ae1b6e5e3c8a9f7d4e2b1c0e9f8.jpg",
    members: [
      { name: "Jisoo", koreanName: "김지수", role: "보컬", info: "1995년 1월 3일생. 리더이자 보컬리스트.", image: "https://i.pinimg.com/736x/5b/8a/9c/5b8a9cf1e2d3b4a5c6d7e8f9a0b1c2d3.jpg" },
      { name: "Jennie", koreanName: "김제니", role: "래퍼", info: "1996년 1월 16일생. 메인 래퍼.", image: "https://i.pinimg.com/736x/8a/9c/ad/8a9cad1e2f3b4c5d6e7f8a9b0c1d2e3f4.jpg" },
      { name: "Rosé", koreanName: "박채영", role: "보컬", info: "1997년 2월 11일생. 메인 보컬.", image: "https://i.pinimg.com/736x/9c/ad/be/9cadbe1f2a3b4c5d6e7f8a9b0c1d2e3f4a5.jpg" },
      { name: "Lisa", koreanName: "리사", role: "래퍼", info: "1997년 3월 27일생. 메인 댄서.", image: "https://i.pinimg.com/736x/ad/be/cf/adbecf1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6.jpg" }
    ]
  },
  {
    id: 3,
    name: "TWICE",
    description: "트와이스",
    image: "https://i.pinimg.com/736x/6c/d/e8/6cdfe8a1b2c3d4e5f6a7b8c9d0e1f2a3.jpg",
    members: [
      { name: "Nayeon", koreanName: "임나연", role: "보컬", info: "1995년 9월 22일생. 메인 보컬.", image: "https://i.pinimg.com/736x/d/e8/f1/cdef12f3a4b5c6d7e8f9a0b1c2d3e4f5.jpg" },
      { name: "Jeongyeon", koreanName: "정한정", role: "보컬", info: "1996년 11월 3일생. 리드 보컬.", image: "https://i.pinimg.com/736x/e8/f1/23/e8f123f4a5b6c7d8e9f0a1b2c3d4e5f6.jpg" },
      { name: "Momo", koreanName: "모모", role: "댄서", info: "1996년 11월 6일생. 메인 댄서.", image: "https://i.pinimg.com/736x/f1/23/45/f12345f6a7b8c9d0e1f2a3b4c5d6e7f8.jpg" },
      { name: "Sana", koreanName: "사나", role: "보컬", info: "1996년 12월 29일생. 리드 보컬.", image: "https://i.pinimg.com/736x/23/45/67/234567f8a9b0c1d2e3f4a5b6c7d8e9f0.jpg" },
      { name: "Jihyo", koreanName: "박지효", role: "보컬", info: "1997년 2월 1일생. 리더.", image: "https://i.pinimg.com/736x/45/67/89/456789f0a1b2c3d4e5f6a7b8c9d0e1f2.jpg" },
      { name: "Mina", koreanName: "미나", role: "댄서", info: "1997년 10월 23일생. 메인 댄서.", image: "https://i.pinimg.com/736x/67/89/ab/6789abf1a2b3c4d5e6f7a8b9c0d1e2f3.jpg" },
      { name: "Dahyun", koreanName: "김다현", role: "래퍼", info: "1998년 5월 28일생. 리드 래퍼.", image: "https://i.pinimg.com/736x/89/ab/cd/89abcd12f3a4b5c6d7e8f9a0b1c2d3e4.jpg" },
      { name: "Chaeyoung", koreanName: "孙彩瑛", role: "보컬", info: "1999년 3월 23일생. 리드 보컬.", image: "https://i.pinimg.com/736x/ab/cd/ef/abcdf01f2a3b4c5d6e7f8a9b0c1d2e3f4.jpg" },
      { name: "Tzuyu", koreanName: "周子瑜", role: "보컬", info: "1999년 6월 14일생. 메인 보컬.", image: "https://i.pinimg.com/736x/cd/ef/12/cdef1234f5a6b7c8d9e0f1a2b3c4d5e6.jpg" }
    ]
  },
  {
    id: 4,
    name: "EXO",
    description: "이xo",
    image: "https://i.pinimg.com/736x/7e/f8/9a/7ef89a1b2c3d4e5f6a7b8c9d0e1f2a3b4.jpg",
    members: [
      { name: "Suho", koreanName: "김수호", role: "리더", info: "1991년 5월 22일생. 리더.", image: "https://i.pinimg.com/736x/f8/9a/bc/f89abcf1a2b3c4d5e6f7a8b9c0d1e2f3.jpg" },
      { name: "Lay", koreanName: "레이", role: "댄서", info: "1991년 10월 7일생. 댄서.", image: "https://i.pinimg.com/736x/9a/bc/de/9abcde12f3a4b5c6d7e8f9a0b1c2d3e4.jpg" },
      { name: "Chen", koreanName: "김종대", role: "보컬", info: "1992년 9월 21일생. 메인 보컬.", image: "https://i.pinimg.com/736x/bc/de/f0/bcdef01f2a3b4c5d6e7f8a9b0c1d2e3f4.jpg" },
      { name: "Baekhyun", koreanName: "변백현", role: "보컬", info: "1992년 5월 6일생. 메인 보컬.", image: "https://i.pinimg.com/736x/de/f0/12/def012f3a4b5c6d7e8f9a0b1c2d3e4f5.jpg" },
      { name: "Chanyeol", koreanName: "박찬열", role: "래퍼", info: "1992년 11월 27일생. 리드 래퍼.", image: "https://i.pinimg.com/736x/f0/12/34/f0123456a7b8c9d0e1b4c5f2a3d6e7f8.jpg" },
      { name: "Kai", koreanName: "김종인", role: "댄서", info: "1994년 1월 14일생. 메인 댄서.", image: "https://i.pinimg.com/736x/12/34/56/12345678f9a0b1c2d3e4f5a6b7c8d9e0.jpg" },
      { name: "Sehun", koreanName: "오세훈", role: "댄서", info: "1994년 4월 12일생. 리드 댄서.", image: "https://i.pinimg.com/736x/34/56/78/34567890f1a2b3c4d5e6f7a8b9c0d1e2.jpg" }
    ]
  },
  {
    id: 5,
    name: "NewJeans",
    description: "뉴진스",
    image: "https://i.pinimg.com/736x/8f/e9/10/8fe910f1a2b3c4d5e6f7a8b9c0d1e2f3a4.jpg",
    members: [
      { name: "Minji", koreanName: "김민지", role: "보컬", info: "2002년 5월 7일생. 리드 보컬.", image: "https://i.pinimg.com/736x/e9/10/23/e91023f4a5b6c7d8e9f0a1b2c3d4e5f6.jpg" },
      { name: "Hanni", koreanName: "한니", role: "보컬", info: "2000년 10월 6일생. 보컬.", image: "https://i.pinimg.com/736x/10/23/45/102345f6a7b8c9d0e1f2a3b4c5d6e7f8.jpg" },
      { name: "Danielle", koreanName: "다니엘", role: "보컬", info: "2005년 2월 13일생. 메인 보컬.", image: "https://i.pinimg.com/736x/23/45/67/23456789f0a1b2c3d4e5f6a7b8c9d0e1.jpg" },
      { name: "Haerin", koreanName: "하린", role: "보컬", info: "2006년 5月 15일생. 보컬.", image: "https://i.pinimg.com/736x/45/67/89/45678901f2a3b4c5d6e7f8a9b0c1d2e3.jpg" },
      { name: "Hyein", koreanName: "하은", role: "보컬", info: "2008년 11월 13일생. 보컬.", image: "https://i.pinimg.com/736x/67/89/ab/67890123f4a5b6c7d8e9f0a1b2c3d4e5.jpg" }
    ]
  },
  {
    id: 6,
    name: "SEVENTEEN",
    description: "세븐틴",
    image: "https://i.pinimg.com/736x/9a/bc/d1/9abcd1f2a3b4c5d6e7f8a9b0c1d2e3f4a5.jpg",
    members: [
      { name: "S.Coups", koreanName: "에스쿱스", role: "리더", info: "1996년 8월 8일생. 리더.", image: "https://i.pinimg.com/736x/bc/d1/34/bcd134f5a6b7c8d9e0f1a2b3c4d5e6f7.jpg" },
      { name: "Jeonghan", koreanName: "정한", role: "보컬", info: "1995년 10월 4일생. 리드 보컬.", image: "https://i.pinimg.com/736x/d1/34/56/d13456f7a8b9c0d1e2f3a4b5c6d7e8f9.jpg" },
      { name: "Joshua", koreanName: "조슈아", role: "보컬", info: "1995년 12월 30일생. 보컬.", image: "https://i.pinimg.com/736x/34/56/78/34567890f1a2b3c4d5e6f7a8b9c0d1e2.jpg" },
      { name: "Jun", koreanName: "준", role: "댄서", info: "1996년 6월 10일생. 댄서.", image: "https://i.pinimg.com/736x/56/78/90/56789012f3a4b5c6d7e8f9a0b1c2d3e4.jpg" },
      { name: "Hoshi", koreanName: "호시", role: "댄서", info: "1996년 6월 15일생. 퍼포먼스 팀장.", image: "https://i.pinimg.com/736x/78/90/12/78901234f5a6b7c8d9e0f1a2b3c4d5e6.jpg" },
      { name: "Wonwoo", koreanName: "원우", role: "래퍼", info: "1996년 7월 17일생. 래퍼.", image: "https://i.pinimg.com/736x/90/12/34/90123456f7a8b9c0d1e2f3a4b5c6d7e8.jpg" },
      { name: "Woozi", koreanName: "우지", role: "보컬", info: "1996년 11월 22일생. 프로듀서.", image: "https://i.pinimg.com/736x/12/34/56/12345678f9a0b1c2d3e4f5a6b7c8d9e0.jpg" },
      { name: "DK", koreanName: "도겸", role: "보컬", info: "1997년 2월 18일생. 메인 보컬.", image: "https://i.pinimg.com/736x/34/56/78/34567890f1a2b3c4d5e6f7a8b9c0d1e2.jpg" },
      { name: "Mingyu", koreanName: "민규", role: "래퍼", info: "1997년 4月 6일생. 래퍼.", image: "https://i.pinimg.com/736x/56/78/90/56789012f3a4b5c6d7e8f9a0b1c2d3e4.jpg" },
      { name: "The8", koreanName: "디에잇", role: "댄서", info: "1997년 11월 7일생. 댄서.", image: "https://i.pinimg.com/736x/78/90/12/78901234f5a6b7c8d9e0f1a2b3c4d5e6.jpg" },
      { name: "Seungkwan", koreanName: "승관", role: "보컬", info: "1998년 1월 16일생. 메인 보컬.", image: "https://i.pinimg.com/736x/90/12/34/90123456f7a8b9c0d1e2f3a4b5c6d7e8.jpg" },
      { name: "Vernon", koreanName: "버논", role: "래퍼", info: "1998년 2월 18일생. 래퍼.", image: "https://i.pinimg.com/736x/12/34/56/12345678f9a0b1c2d3e4f5a6b7c8d9e0.jpg" },
      { name: "Dino", koreanName: "디노", role: "댄서", info: "1999년 2월 21일생. 댄서.", image: "https://i.pinimg.com/736x/34/56/78/34567890f1a2b3c4d5e6f7a8b9c0d1e2.jpg" }
    ]
  }
];

const themeToggle = document.getElementById('themeToggle');
const groupsPage = document.getElementById('groupsPage');
const membersPage = document.getElementById('membersPage');
const groupsGrid = document.getElementById('groupsGrid');
const membersGrid = document.getElementById('membersGrid');
const groupTitle = document.getElementById('groupTitle');
const backBtn = document.getElementById('backBtn');
const memberModal = document.getElementById('memberModal');
const closeModal = document.getElementById('closeModal');
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeContact = document.getElementById('closeContact');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalInfo = document.getElementById('modalInfo');

let currentGroup = null;

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  if (document.body.classList.contains('light')) {
    themeToggle.textContent = '☀️ 화이트모드';
  } else {
    themeToggle.textContent = '🌙 다크모드';
  }
});

function renderGroups() {
  groupsGrid.innerHTML = kpopGroups.map(group => `
    <div class="group-card" onclick="showMembers(${group.id})">
      <img src="${group.image}" alt="${group.name}" onerror="this.src='https://via.placeholder.com/300x200/667eea/ffffff?text=${group.name}'">
      <div class="group-info">
        <h3>${group.name}</h3>
        <p>${group.description}</p>
      </div>
    </div>
  `).join('');
}

function showMembers(groupId) {
  currentGroup = kpopGroups.find(g => g.id === groupId);
  groupTitle.textContent = `${currentGroup.name} - ${currentGroup.description}`;
  
  membersGrid.innerHTML = currentGroup.members.map(member => `
    <div class="member-card" onclick="showMemberDetail('${member.name}')">
      <img src="${member.image}" alt="${member.name}" onerror="this.src='https://via.placeholder.com/220x250/667eea/ffffff?text=${member.name}'">
      <div class="member-info">
        <h4>${member.koreanName}</h4>
        <span>${member.role}</span>
      </div>
    </div>
  `).join('');
  
  groupsPage.classList.add('hidden');
  membersPage.classList.remove('hidden');
}

function showMemberDetail(memberName) {
  const member = currentGroup.members.find(m => m.name === memberName);
  modalImage.src = member.image;
  modalImage.onerror = function() {
    this.src = 'https://via.placeholder.com/200x250/667eea/ffffff?text=' + member.name;
  };
  modalName.textContent = `${member.koreanName} (${member.name})`;
  modalInfo.textContent = member.info;
  memberModal.classList.remove('hidden');
}

backBtn.addEventListener('click', () => {
  membersPage.classList.add('hidden');
  groupsPage.classList.remove('hidden');
  currentGroup = null;
});

closeModal.addEventListener('click', () => {
  memberModal.classList.add('hidden');
});

memberModal.addEventListener('click', (e) => {
  if (e.target === memberModal) {
    memberModal.classList.add('hidden');
  }
});

contactBtn.addEventListener('click', () => {
  contactModal.classList.remove('hidden');
});

closeContact.addEventListener('click', () => {
  contactModal.classList.add('hidden');
});

contactModal.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.classList.add('hidden');
  }
});

renderGroups();
