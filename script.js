// script.js (已升级)

document.addEventListener('DOMContentLoaded', function() {

    // --- 数据定义区 ---

    const departments = [
        { id: 'lead', name: '指导老师 & 负责人', icon: 'fas fa-star', description: '指导和管理中心的核心团队。', pageUrl: 'index4cov.html' },
        { id: 'wx', name: '文宣部', icon: 'fas fa-bullhorn', description: 'TBD。', pageUrl: 'departments/wx/dep_home.html' },
        { id: 'qy', name: '前研探索部', icon: 'fas fa-flask', description: 'TBD。', pageUrl: 'departments/qy/department_intro.html' },
        { id: 'jt', name: '技术推广部', icon: 'fas fa-code', description: 'TBD。', pageUrl: 'departments/jt/dep_home.html' },
        { id: 'cj', name: '创新实践部', icon: 'fas fa-lightbulb', description: 'TBD。', pageUrl: 'departments/cj/dep_home.html' }
    ];

    // [MODIFIED] 成员数据：为每个成员增加了 'year' 属性
    const members = [
        // --- 2025-26级 ---
        {
            name:'YY',
            role:'指导老师',
            bio:'期待科创中心越来越好！',
            imageUrl:'image/3_zdls.jpeg',
            departmentId:'lead',
            year:'2025-2026届',
            contact:''
        },
        {
            name:'xk',
            role:'中心负责人',
            bio:'让科技有温度，让科技有力量！希望和科创一起，变得越来越好！',
            imageUrl:'image/3_fzr.png',
            departmentId:'lead',
            year:'2025-2026届',
            contact:''

        },
        {
            name:'太阳镜',
            role:'文宣部部长',
            bio:'天天开心，开心就好，大家都要幸福呀🥰 ps：来文宣来文宣',
            imageUrl:'image/3_wx.jpeg',
            departmentId:'wx',
            year:'2025-2026届',
            contact:'3346875120@qq.com'

        },
        {
            name:'夏白轩',
            role:'技术推广部部长',
            bio:'找到几件热爱的事情，然后做下去就好了੭ ᐕ)੭ 希望每一位加入科创的小朋友都能找到自己愿意为之投入的事情！',
            imageUrl:'image/3_jt.gif',
            departmentId:'jt',
            year:'2025-2026届',
            contact:'3493947396@qq.com'

        },
        {
            name:'JJ',
            role:'创新实践部部长',
            bio:'明天一定会是更好的一天，不论对你，对我们，对科创大家庭',
            imageUrl:'image/3_cj.jpg',
            departmentId:'cj',
            year:'2025-2026届',
            contact:'2176342971@qq.com'

        },
        {
            name:'邪恶涵宝猎手',
            role:'前研探索部长',
            bio:'科创的故事，永远有下一章 —— 而我们，都是执笔人',
            imageUrl:'image/3_qy.jpg',
            departmentId:'qy',
            year:'2025-2026届',
            contact:''

        },
        // --- 2024-25级 ---
        {   
            name: 'CT',
            role: 'Leader',
            bio: '',
            imageUrl: 'image/2_zdls.jpg',
            departmentId: 'lead',
            year: "2024-2025届",
            contact:''

        },
        {
            name: '无尘丨溯荒',
            role: '中心负责人',
            bio: '莫负相逢人海间 <br>\
             ——用一点点时间，和全部的爱。',
            imageUrl: 'image/2_fzr.jpg',
            departmentId: 'lead',
            year: "2024-2025届",
            contact:'abilitywuchen@qq.com'

        },
        {
            name: '蓝淇',
            role: '文宣部部长',
            bio: '科创科创我们喜欢你…在这个温暖的大家庭里大家一起共事，一起学习，一起玩耍，一起搞抽象，收获了无限的温馨回忆。作为文宣部的部长，我目睹着小朋友们和那时的我一样从懵懂无知到老奸巨猾（？），变成了一颗颗可以托举科创bigger family的大树，非常感谢大家能来到这里，能与我相遇❤️',
            imageUrl: 'image/emm_2_wx.jpg',
            departmentId: 'wx',
            year: "2024-2025届",
            contact:'3304485155@qq.com（lihanqizzz@gmail.com）'

        },
        {
            name: 'TK',
            role: '技术推广部部长',
            bio: '不要急，没有⼀朵花，从⼀开始就是花。也不要嚣张，没有⼀朵花，到最后还是花。',
            imageUrl: 'image/2_jt.jpg',
            departmentId: 'jt',
            year: "2024-2025届",
            contact:'1243564090@qq.com'

        },
        {
            name: 'Crazy_Bear',
            role: '创新实践部部长',
            bio: '创剑我们走，去追寻所爱！',
            imageUrl: 'image/2_cj.jpg',
            departmentId: 'cj',
            year: "2024-2025届",
            contact:'2373485985@qq.com'

        },
        {
            name: 'Lemonoscar',
            role: '前研探索部长',
            bio: '玲珑骰子安红豆，入骨相思知不知。爱来自前研！衷心祝愿科创的未来一帆风顺，继往开来！！！',
            imageUrl: 'image/2_qy.jpg',
            departmentId: 'qy',
            year: "2024-2025届",
            contact:'3467057703@qq.com'

        },
        // 2023-2024届
        {
            name:'斯威特·铁',
            role:'指导老师',
            bio:'To be pure, decent and brave.',
            imageUrl:'image/1_zdls.jpeg',
            departmentId:'lead',
            year:'2023-2024届',
            contact:''

        },
        {
            name:'SH',
            role:'中心负责人',
            bio:'敢想、敢错、敢创造；保持好奇，保持天真，科技永远为浪漫的理想主义者敞开大门✨',
            imageUrl:'image/1_fzr.jpeg',
            departmentId:'lead',
            year:'2023-2024届',
            contact:'smooth_lsh@zju.edu.cn'


        },
        {
            name:'XX',
            role:'文宣部部长',
            bio:'希望大家在科创拥有特别好的每一年～',
            imageUrl:'image/1_wx.jpeg',
            departmentId:'wx',
            year:'2023-2024届',
            contact:''


        },
        {
            name:'Lil Dino$aur',
            role:'技术推广部部长',
            bio:'Tech或许是这个时代最容易获得的生产力😋<br>\
所以想到什么就去做做看，和AI聊一聊想法和设计。<br>\
如果有什么好东西也要记得推广给身边人哦，毕竟任何技术的发展都需要依靠社区的力量😋',
            imageUrl:'image/1_jt.jpg',
            departmentId:'jt',
            year:'2023-2024届',
            contact:'lildinosaurni@outlook.com'

            
        },
        {
            name:'SH',
            role:'创新实践部部长',
            bio:'',
            imageUrl:'image/1_cj.jpg',
            departmentId:'cj',
            year:'2023-2024届',
            contact:''


        },
        {
            name:'李峥',
            role:'前研探索部长',
            bio:'仰望前空，追研星辰；心怀热爱，启智求真。作为第一任前研探索部部长，我见证了无数想法在这里萌芽、生长，最终化为实践。那份从零到一的激情与坚持，是云峰科创精神最真实的注脚。愿未来的科创人始终保持热爱与好奇，在青春的年华里敢想敢做，把探索的脚步延伸到更远的地方。',
            imageUrl:'image/1_qy.jpg',
            departmentId:'qy',
            year:'2023-2024届',
            contact:'realleechung@foxmail.com'


        },
        // 初创
        {
            name:'HZ',
            role:'指导老师',
            bio:'循此苦旅，以达天际,<br>\
祝大家在科创有所得有所获',
            imageUrl:'image/0_zdls.jpeg',
            departmentId:'lead',
            year:'初创',
            contact:''


        },
        {
            name:'BW',
            role:'负责人',
            bio:'能和志同道合的伙伴共创云峰科创中心，我深感幸运。在这里的每段经历都让我受益匪浅：既结识了行业前辈与优秀同窗，也让心中的科研种子随年级增长愈发茁壮，更陪伴我斩获竺奖、收获全奖Offer。<br>\
愿科创中心的大家都能在此找到热爱，用好平台资源，让这份热爱发光发热。如有需要，请联系我13857822356~',
            imageUrl:'image/0_fzr.JPG',
            departmentId:'lead',
            year:'初创',
            contact:'qiubowendddd@gmail.com'



        },
    ];

    // --- 功能函数区 ---

    function displayMembersByYear() {
        const container = document.getElementById('member-groups-container');
        if (!container) return;

        // 1. 按年份对成员进行分组
        const groupedByYear = {};
        members.forEach(member => {
            if (!groupedByYear[member.year]) {
                groupedByYear[member.year] = []; // 如果这个年份的分组不存在，就创建一个空数组
            }
            groupedByYear[member.year].push(member); // 将成员添加到对应年份的数组中
        });

        // 2. 获取所有年份并降序排序 (让最新的年份在最上面)
        const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

        // 3. 遍历排序后的年份，为每一年生成 HTML 结构
        sortedYears.forEach(year => {
            // 创建年份分组的容器
            const yearGroup = document.createElement('div');
            yearGroup.className = 'year-group';

            // 创建该年份下的成员卡片网格
            let memberCardsHTML = '';
            const yearMembers = groupedByYear[year];

            yearMembers.forEach(member => {
                const departmentInfo = departments.find(d => d.id === member.departmentId);
                const departmentLink = departmentInfo ? `${departmentInfo.pageUrl}?dep=${departmentInfo.id}` : '#';
                
                // 拼接每个成员卡片的 HTML
                memberCardsHTML += `
                    <div class="member-card">
                        <img src="${member.imageUrl}" alt="成员 ${member.name} 的头像">
                        <h3>${member.name}</h3>
                        <a class="role" href="${departmentLink}">${member.role}</a>
                        <p class="bio">${member.bio}</p>
                        <p class="contact">${member.contact}</p>
                    </div>
                `;
            });
            
            // 将年份标题和成员网格组合成完整的年份分组 HTML
            yearGroup.innerHTML = `
                <h3 class="year-title">${year}</h3>
                <div class="member-grid">
                    ${memberCardsHTML}
                </div>
            `;

            // 将生成的年份分组添加到主容器中
            container.appendChild(yearGroup);
        });
    }
    function setupCommonFeatures() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const navMenu = document.querySelector('.nav-menu'); // querySelector() 方法返回文档中与指定选择器或选择器组匹配的第一个元素。
        if (mobileMenuButton && navMenu) {
            mobileMenuButton.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
        const header = document.getElementById('main-header');
        if (header) {
            window.addEventListener('scroll', () => {
                header.classList.toggle('scrolled', window.scrollY > 50);
            });
        }
    }

    setupCommonFeatures(); // 首先调用通用功能设置函数，确保所有页面共享的交互功能（如导航菜单和页眉滚动效果）被初始化。
    if (document.getElementById('member-groups-container')) {
        displayMembersByYear(); 
    } 
});