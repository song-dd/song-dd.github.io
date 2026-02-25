const kpopGroups = [
  {
    id: 1,
    name: "BTS",
    description: "방탄소년단 - 전 세계적인 한류의 아이콘",
    color: "#e91e63",
    members: [
      { name: "RM", koreanName: "김남준", role: "리더, 래퍼", info: "1994년 9월 12일생. BTS의 리더이자 메인 래퍼입니다." },
      { name: "Jin", koreanName: "김석진", role: "보컬", info: "1995년 12월 4일생. 글로벌 Ambassador입니다." },
      { name: "SUGA", koreanName: "민윤기", role: "래퍼", info: "1993년 3월 9일생. 프로듀서이자 래퍼입니다." },
      { name: "j-hope", koreanName: "정호석", role: "래퍼", info: "1994년 2월 18일생. 메인 댄서이자 래퍼입니다." },
      { name: "Jimin", koreanName: "박지민", role: "보컬", info: "1995년 10월 13일생. 메인 댄서입니다." },
      { name: "V", koreanName: "김태형", role: "보컬", info: "1995년 12월 30일생. 보컬리스트입니다." },
      { name: "Jungkook", koreanName: "전정국", role: "보컬", info: "1997년 9월 1일생. 막내이자 서브 래퍼입니다." }
    ]
  },
  {
    id: 2,
    name: "BLACKPINK",
    description: "블랙핑크 - K-POP 걸그룹의 대표",
    color: "#ff4081",
    members: [
      { name: "Jisoo", koreanName: "김지수", role: "보컬", info: "1995년 1월 3일생. 리더이자 보컬리스트입니다." },
      { name: "Jennie", koreanName: "김제니", role: "래퍼", info: "1996년 1월 16일생. 메인 래퍼입니다." },
      { name: "Rosé", koreanName: "박채영", role: "보컬", info: "1997년 2월 11일생. 메인 보컬입니다." },
      { name: "Lisa", koreanName: "리사", role: "래퍼", info: "1997년 3월 27일생. 메인 댄서입니다." }
    ]
  },
  {
    id: 3,
    name: "TWICE",
    description: "트와이스 - 일본&한국 대박 그룹",
    color: "#f06292",
    members: [
      { name: "Nayeon", koreanName: "임나연", role: "보컬", info: "1995년 9월 22일생. 메인 보컬입니다." },
      { name: "Jeongyeon", koreanName: "정한정", role: "보컬", info: "1996년 11월 3일생. 리드 보컬입니다." },
      { name: "Momo", koreanName: "모모", role: "댄서", info: "1996년 11월 6일생. 메인 댄서입니다." },
      { name: "Sana", koreanName: "사나", role: "보컬", info: "1996년 12월 29일생. 리드 보컬입니다." },
      { name: "Jihyo", koreanName: "박지효", role: "보컬", info: "1997년 2월 1일생. 리더입니다." },
      { name: "Mina", koreanName: "미나", role: "댄서", info: "1997년 10월 23일생. 메인 댄서입니다." },
      { name: "Dahyun", koreanName: "김다현", role: "래퍼", info: "1998년 5월 28일생. 리드 래퍼입니다." },
      { name: "Chaeyoung", koreanName: "孙彩瑛", role: "보컬", info: "1999년 3월 23일생. 리드 보컬입니다." },
      { name: "Tzuyu", koreanName: "周子瑜", role: "보컬", info: "1999년 6월 14일생. 메인 보컬입니다." }
    ]
  },
  {
    id: 4,
    name: "EXO",
    description: "엑소 - China-KPOP의 대표",
    color: "#7c4dff",
    members: [
      { name: "Suho", koreanName: "김수호", role: "리더", info: "1991년 5월 22일생. 리더입니다." },
      { name: "Lay", koreanName: "레이", role: "댄서", info: "1991년 10월 7일생. 댄서입니다." },
      { name: "Chen", koreanName: "김종대", role: "보컬", info: "1992년 9월 21일생. 메인 보컬입니다." },
      { name: "Baekhyun", koreanName: "변백현", role: "보컬", info: "1992년 5월 6일생. 메인 보컬입니다." },
      { name: "Chanyeol", koreanName: "박찬열", role: "래퍼", info: "1992년 11월 27일생. 리드 래퍼입니다." },
      { name: "Kai", koreanName: "김종인", role: "댄서", info: "1994년 1월 14일생. 메인 댄서입니다." },
      { name: "Sehun", koreanName: "오세훈", role: "댄서", info: "1994년 4월 12일생. 리드 댄서입니다." }
    ]
  },
  {
    id: 5,
    name: "NewJeans",
    description: "뉴진스 - 4세대 걸그룹의 대가",
    color: "#00bcd4",
    members: [
      { name: "Minji", koreanName: "김민지", role: "보컬", info: "2002년 5월 7일생. 리드 보컬입니다." },
      { name: "Hanni", koreanName: "한니", role: "보컬", info: "2000년 10월 6일생. 보컬입니다." },
      { name: "Danielle", koreanName: "다니엘", role: "보컬", info: "2005년 2월 13일생. 메인 보컬입니다." },
      { name: "Haerin", koreanName: "하린", role: "보컬", info: "2006년 5월 15일생. 보컬입니다." },
      { name: "Hyein", koreanName: "하은", role: "보컬", info: "2008년 11월 13일생. 보컬입니다." }
    ]
  },
  {
    id: 6,
    name: "SEVENTEEN",
    description: "세븐틴 - 13인조 멤버의 종합예술",
    color: "#ff9800",
    members: [
      { name: "S.Coups", koreanName: "에스쿱스", role: "리더", info: "1996년 8월 8일생. 리더입니다." },
      { name: "Jeonghan", koreanName: "정한", role: "보컬", info: "1995년 10월 4일생. 리드 보컬입니다." },
      { name: "Joshua", koreanName: "조슈아", role: "보컬", info: "1995년 12월 30일생. 보컬입니다." },
      { name: "Jun", koreanName: "준", role: "댄서", info: "1996년 6월 10일생. 댄서입니다." },
      { name: "Hoshi", koreanName: "호시", role: "댄서", info: "1996년 6월 15일생. 퍼포먼스 팀장입니다." },
      { name: "Wonwoo", koreanName: "원우", role: "래퍼", info: "1996년 7월 17일생. 래퍼입니다." },
      { name: "Woozi", koreanName: "우지", role: "보컬", info: "1996년 11월 22일생. 프로듀서입니다." },
      { name: "DK", koreanName: "도겸", role: "보컬", info: "1997년 2월 18일생. 메인 보컬입니다." },
      { name: "Mingyu", koreanName: "민규", role: "래퍼", info: "1997년 4월 6일생. 래퍼입니다." },
      { name: "The8", koreanName: "디에잇", role: "댄서", info: "1997년 11월 7일생. 댄서입니다." },
      { name: "Seungkwan", koreanName: "승관", role: "보컬", info: "1998년 1월 16일생. 메인 보컬입니다." },
      { name: "Vernon", koreanName: "버논", role: "래퍼", info: "1998년 2월 18일생. 래퍼입니다." },
      { name: "Dino", koreanName: "디노", role: "댄서", info: "1999년 2월 21일생. 댄서입니다." }
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
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalInfo = document.getElementById('modalInfo');
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeContact = document.getElementById('closeContact');

let currentGroup = null;

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  if (document.body.classList.contains('light')) {
    themeToggle.textContent = '☀️ 라이트모드';
  } else {
    themeToggle.textContent = '🌙 다크모드';
  }
});

function renderGroups() {
  groupsGrid.innerHTML = kpopGroups.map(group => `
    <div class="group-card" onclick="showMembers(${group.id})">
      <div class="image-wrapper" style="background: ${group.color}">
        <div class="group-icon">${group.name}</div>
      </div>
      <div class="group-info">
        <h3>${group.name}</h3>
        <p class="group-desc">${group.description}</p>
        <span class="member-count">👤 ${group.members.length}명</span>
      </div>
    </div>
  `).join('');
}

function showMembers(groupId) {
  currentGroup = kpopGroups.find(g => g.id === groupId);
  groupTitle.textContent = `${currentGroup.name} - ${currentGroup.description}`;
  
  membersGrid.innerHTML = currentGroup.members.map(member => `
    <div class="member-card" onclick="showMemberDetail('${member.name}')">
      <div class="member-avatar" style="background: ${currentGroup.color}">
        <span>${member.koreanName.charAt(0)}</span>
      </div>
      <div class="member-info">
        <h4>${member.koreanName}</h4>
        <span class="role">${member.role}</span>
      </div>
    </div>
  `).join('');
  
  groupsPage.classList.add('hidden');
  membersPage.classList.remove('hidden');
}

function showMemberDetail(memberName) {
  const member = currentGroup.members.find(m => m.name === memberName);
  modalImage.parentElement.style.display = 'none';
  modalName.textContent = `${member.koreanName} (${member.name})`;
  modalRole.textContent = member.role;
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
