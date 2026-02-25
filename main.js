const kpopGroups = [
  {
    id: 1,
    name: "BTS",
    description: "방탄소년단",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/BTS_for_Billboard_Music_Awards%2C_April_2019.jpg/640px-BTS_for_Billboard_Music_Awards%2C_April_2019.jpg",
    members: [
      { name: "RM", koreanName: "김남준", role: "리더, 래퍼", info: "1994년 9월 12일생. BTS의 리더이자 메인 래퍼.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/RM_2019_%28cropped%29.jpg/400px-RM_2019_%28cropped%29.jpg" },
      { name: "Jin", koreanName: "김석진", role: "보컬", info: "1995년 12월 4일생. 글로벌 Ambassador.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Jin_on_way_to_Jimmy_Kimmel_Show_%282%29_%28cropped%29.jpg/400px-Jin_on_way_to_Jimmy_Kimmel_Show_%282%29_%28cropped%29.jpg" },
      { name: "SUGA", koreanName: "민윤기", role: "래퍼", info: "1993년 3월 9일생. 프로듀서이자 래퍼.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Suga%2C_July_2019.jpg/400px-Suga%2C_July_2019.jpg" },
      { name: "j-hope", koreanName: "정호석", role: "래퍼", info: "1994년 2월 18일생. 메인 댄서이자 래퍼.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/J-Hope%2C_July_2019.jpg/400px-J-Hope%2C_July_2019.jpg" },
      { name: "Jimin", koreanName: "박지민", role: "보컬", info: "1995년 10월 13일생. 메인 댄서.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Jimin_during_the_BTS_Map_of_the_Soul_On_Tour%2C_2019.jpg/400px-Jimin_during_the_BTS_Map_of_the_Soul_On_Tour%2C_2019.jpg" },
      { name: "V", koreanName: "김태형", role: "보컬", info: "1995년 12월 30일생. 보컬리스트.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/V_at_a_concert_%28cropped%29.png/400px-V_at_a_concert_%28cropped%29.png" },
      { name: "Jungkook", koreanName: "전정국", role: "보컬", info: "1997년 9월 1일생. 막내이자 서브 래퍼.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Jungkook%2C_July_2019.jpg/400px-Jungkook%2C_July_2019.jpg" }
    ]
  },
  {
    id: 2,
    name: "BLACKPINK",
    description: "블랙핑크",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Blackpink_Poster.jpg/640px-Blackpink_Poster.jpg",
    members: [
      { name: "Jisoo", koreanName: "김지수", role: "보컬", info: "1995년 1월 3일생. 리더이자 보컬리스트.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Jisoo_at_Sears_Tower%2C_July_2019.jpg/400px-Jisoo_at_Sears_Tower%2C_July_2019.jpg" },
      { name: "Jennie", koreanName: "김제니", role: "래퍼", info: "1996년 1월 16일생. 메인 래퍼.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jennie_Kim%2C_July_2019_%28cropped%29.jpg/400px-Jennie_Kim%2C_July_2019_%28cropped%29.jpg" },
      { name: "Rosé", koreanName: "박채영", role: "보컬", info: "1997년 2월 11일생. 메인 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ros%C3%A9_at_Pretty_Savage_press_conference_%28cropped%29.jpg/400px-Ros%C3%A9_at_Pretty_Savage_press_conference_%28cropped%29.jpg" },
      { name: "Lisa", koreanName: "리사", role: "래퍼", info: "1997년 3월 27일생. 메인 댄서.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Lisa_at_Sears_Tower%2C_July_2019_%28cropped%29.jpg/400px-Lisa_at_Sears_Tower%2C_July_2019_%28cropped%29.jpg" }
    ]
  },
  {
    id: 3,
    name: "TWICE",
    description: "트와이스",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Twice_Official_Logo.png/640px-Twice_Official_Logo.png",
    members: [
      { name: "Nayeon", koreanName: "임나연", role: "보컬", info: "1995년 9월 22일생. 메인 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Nayeon_at_KBS_Building%2C_December_2022.png/400px-Nayeon_at_KBS_Building%2C_December_2022.png" },
      { name: "Jeongyeon", koreanName: "정한정", role: "보컬", info: "1996년 11월 3일생. 리드 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Jeongyeon_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Jeongyeon_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Momo", koreanName: "모모", role: "댄서", info: "1996년 11월 6일생. 메인 댄서.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Momo_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Momo_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Sana", koreanName: "사나", role: "보컬", info: "1996년 12월 29일생. 리드 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sana_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Sana_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Jihyo", koreanName: "박지효", role: "보컬", info: "1997년 2월 1일생. 리더.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Jihyo_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Jihyo_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Mina", koreanName: "미나", role: "댄서", info: "1997년 10월 23일생. 메인 댄서.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mina_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Mina_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Dahyun", koreanName: "김다현", role: "래퍼", info: "1998년 5월 28일생. 리드 래퍼.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dahyun_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Dahyun_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Chaeyoung", koreanName: "孙彩瑛", role: "보컬", info: "1999년 3월 23일생. 리드 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Chaeyoung_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Chaeyoung_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Tzuyu", koreanName: "周子瑜", role: "보컬", info: "1999년 6월 14일생. 메인 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Tzuyu_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Tzuyu_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" }
    ]
  },
  {
    id: 4,
    name: "EXO",
    description: "엑소",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/EXO_World_Tour_Ex%27Act_%28cropped%29.jpg/640px-EXO_World_Tour_Ex%27Act_%28cropped%29.jpg",
    members: [
      { name: "Suho", koreanName: "김수호", role: "리더", info: "1991년 5월 22일생. 리더.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Suho_at_Election%2C_June_2022_%28cropped%29.png/400px-Suho_at_Election%2C_June_2022_%28cropped%29.png" },
      { name: "Lay", koreanName: "레이", role: "댄서", info: "1991년 10월 7일생. 댄서.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Lay_at_Exo%27s_4th_Anniversary_%28cropped%29.jpg/400px-Lay_at_Exo%27s_4th_Anniversary_%28cropped%29.jpg" },
      { name: "Chen", koreanName: "김종대", role: "보컬", info: "1992년 9월 21일생. 메인 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Chen_at_Exo%27s_5th_Anniversary_%28cropped%29.jpg/400px-Chen_at_Exo%27s_5th_Anniversary_%28cropped%29.jpg" },
      { name: "Baekhyun", koreanName: "변백현", role: "보컬", info: "1992년 5월 6일생. 메인 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Baekhyun_at_Inkigayo%2C_December_2022_%28cropped%29.png/400px-Baekhyun_at_Inkigayo%2C_December_2022_%28cropped%29.png" },
      { name: "Chanyeol", koreanName: "박찬열", role: "래퍼", info: "1992년 11월 27일생. 리드 래퍼.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chanyeol_at_Exo%27s_5th_Anniversary_%28cropped%29.jpg/400px-Chanyeol_at_Exo%27s_5th_Anniversary_%28cropped%29.jpg" },
      { name: "Kai", koreanName: "김종인", role: "댄서", info: "1994년 1월 14일생. 메인 댄서.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Kai_at_Inkigayo%2C_July_2022_%28cropped%29.png/400px-Kai_at_Inkigayo%2C_July_2022_%28cropped%29.png" },
      { name: "Sehun", koreanName: "오세훈", role: "댄서", info: "1994년 4월 12일생. 리드 댄서.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sehun_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Sehun_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" }
    ]
  },
  {
    id: 5,
    name: "NewJeans",
    description: "뉴진스",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/NewJeans_Official_Logo.png/640px-NewJeans_Official_Logo.png",
    members: [
      { name: "Minji", koreanName: "김민지", role: "보컬", info: "2002년 5월 7일생. 리드 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Minji_at_Blue_Drag_Cafe%2C_July_2023_%28cropped%29.jpg/400px-Minji_at_Blue_Drag_Cafe%2C_July_2023_%28cropped%29.jpg" },
      { name: "Hanni", koreanName: "한니", role: "보컬", info: "2000년 10월 6일생. 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Hanni_at_Blue_Drag_Cafe%2C_July_2023_%28cropped%29.jpg/400px-Hanni_at_Blue_Drag_Cafe%2C_July_2023_%28cropped%29.jpg" },
      { name: "Danielle", koreanName: "다니엘", role: "보컬", info: "2005년 2월 13일생. 메인 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Danielle_at_Blue_Drag_Cafe%2C_July_2023_%28cropped%29.jpg/400px-Danielle_at_Blue_Drag_Cafe%2C_July_2023_%28cropped%29.jpg" },
      { name: "Haerin", koreanName: "하린", role: "보컬", info: "2006년 5월 15일생. 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Haerin_at_Blue_Drag_Cafe%2C_July_2023_%28cropped%29.jpg/400px-Haerin_at_Blue_Drag_Cafe%2C_July_2023_%28cropped%29.jpg" },
      { name: "Hyein", koreanName: "하은", role: "보컬", info: "2008년 11월 13일생. 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Hyein_at_Blue_Drag_Cafe%2C_July_2023_%28cropped%29.jpg/400px-Hyein_at_Blue_Drag_Cafe%2C_July_2023_%28cropped%29.jpg" }
    ]
  },
  {
    id: 6,
    name: "SEVENTEEN",
    description: "세븐틴",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Seventeen_Logo.png/640px-Seventeen_Logo.png",
    members: [
      { name: "S.Coups", koreanName: "에스쿱스", role: "리더", info: "1996년 8월 8일생. 리더.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/SCoups_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-SCoups_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Jeonghan", koreanName: "정한", role: "보컬", info: "1995년 10월 4일생. 리드 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Jeonghan_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Jeonghan_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Joshua", koreanName: "조슈아", role: "보컬", info: "1995년 12월 30일생. 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Joshua_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Joshua_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Jun", koreanName: "준", role: "댄서", info: "1996년 6월 10일생. 댄서.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jun_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Jun_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Hoshi", koreanName: "호시", role: "댄서", info: "1996년 6월 15일생. 퍼포먼스 팀장.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Hoshi_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Hoshi_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Wonwoo", koreanName: "원우", role: "래퍼", info: "1996년 7월 17일생. 래퍼.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Wonwoo_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Wonwoo_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Woozi", koreanName: "우지", role: "보컬", info: "1996년 11월 22일생. 프로듀서.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Woozi_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Woozi_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "DK", koreanName: "도겸", role: "보컬", info: "1997년 2월 18일생. 메인 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/DK_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-DK_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Mingyu", koreanName: "민규", role: "래퍼", info: "1997년 4월 6일생. 래퍼.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mingyu_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Mingyu_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "The8", koreanName: "디에잇", role: "댄서", info: "1997년 11월 7일생. 댄서.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/The8_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-The8_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Seungkwan", koreanName: "승관", role: "보컬", info: "1998년 1월 16일생. 메인 보컬.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Seungkwan_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Seungkwan_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Vernon", koreanName: "버논", role: "래퍼", info: "1998년 2월 18일생. 래퍼.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Vernon_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Vernon_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" },
      { name: "Dino", koreanName: "디노", role: "댄서", info: "1999년 2월 21일생. 댄서.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Dino_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png/400px-Dino_at_KBS_2_Radio%2C_July_2022_%28cropped%29.png" }
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
    themeToggle.textContent = '☀️ 화이트모드';
  } else {
    themeToggle.textContent = '🌙 다크모드';
  }
});

function renderGroups() {
  groupsGrid.innerHTML = kpopGroups.map(group => `
    <div class="group-card" onclick="showMembers(${group.id})">
      <div class="image-wrapper">
        <img src="${group.image}" alt="${group.name}" onerror="this.src='https://placehold.co/320x220/667eea/ffffff?text=${group.name}'">
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
      <img src="${member.image}" alt="${member.name}" onerror="this.src='https://placehold.co/220x250/667eea/ffffff?text=${member.name}'">
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
    this.src = 'https://placehold.co/200x250/667eea/ffffff?text=' + member.name;
  };
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
