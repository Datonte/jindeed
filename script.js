const jobs = [
    {
        title: "Island DAO Founder / Multi-Chain Treasury Manager",
        company: "Epstein DeFi Infinity",
        location: "Little St. James Island DAO / NYC / Palm Beach",
        salary: "Unlimited ETH + Island NFT Collection",
        snippet: "Build the ultimate decentralized island ecosystem.<ul><li>Private jet NFT fleet management.</li><li>Flight log smart contract minting.</li></ul>",
        postedBy: { name: "Jeffrey Epstein", initials: "JE", color: "#00C26F", image: "/jeffery epstein.jpeg" },
        description: "Legendary DeFi architect seeks co-founder for revolutionary Island DAO. Manage multi-location treasury operations across NYC, Palm Beach, and private island. Must have experience with complex multi-sig setups and elite client onboarding.",
        requirements: ["Island jurisdiction expertise", "Private aviation NFT experience", "Black book wallet management", "Immunity token holder status"],
        benefits: ["Island DAO citizenship", "Private jet NFT fleet", "Offshore treasury access", "Elite networking events"]
    },
    {
        title: "Chief Shitcoin Officer / Truth Social Token Lead",
        company: "$TRUMP Memecoin Empire",
        location: "Mar-a-Lago, FL (Make Crypto Great Again)",
        salary: "1B $TRUMP tokens + 10% supply",
        snippet: "Launch the biggest, most beautiful memecoin ever.<ul><li>Tremendous rug pull experience.</li><li>Yuuuge marketing skills required.</li></ul>",
        postedBy: { name: "Donald Trump", initials: "DT", color: "#E81B23", image: "/donald trump.jpeg" },
        description: "Looking for a winner to help launch $TRUMP token. Must be able to pump bags like nobody's ever seen before. Loser coins need not apply. We're going to make crypto great again, believe me. The best tokenomics, everybody says so.",
        requirements: ["Tremendous shilling ability", "Experience with yuuuge exits", "Twitter (X) influence 10M+", "Rally crowd management"],
        benefits: ["10% token supply airdrop", "Mar-a-Lago staking pool", "Truth Social verified checkmark", "MAGA hat NFT collection"]
    },
    {
        title: "Dogecoin CEO / Meme Portfolio Manager",
        company: "X / Tesla / SpaceX Multi-Chain Labs",
        location: "Remote (Mars Colony 2030)",
        salary: "420M $DOGE + $X equity",
        snippet: "Much crypto. Very blockchain. Wow.<ul><li>Doge to the moon experience.</li><li>Tweet-induced pump coordination.</li></ul>",
        postedBy: { name: "Elon Musk", initials: "EM", color: "#1DA1F2", image: "/elon musk.jpeg" },
        description: "Seeking autist to manage Dogecoin operations and meme portfolio. Must be comfortable with 3am tweet-induced volatility. Mars colony experience preferred but not required. We're taking Doge to Mars, literally.",
        requirements: ["420/69 IQ", "Tweet at 3am ability", "Meme fluency (expert level)", "Mars mission commitment"],
        benefits: ["420M Dogecoin", "Cybertruck NFT", "Mars colony citizenship", "Blue checkmark (free)"]
    },
    {
        title: "Chief Memecoin Strategist",
        company: "Clinton DAO",
        location: "Remote (Cayman Islands seed phrase)",
        salary: "26M $CLINTON tokens + gas fees",
        snippet: "Launch presidential memecoin with 26 different presales.<ul><li>26+ rug pull experience required.</li><li>Flight manifest NFT minting skills.</li></ul>",
        postedBy: { name: "Bill Clinton", initials: "BC", color: "#0015BC", image: "/Bill clinton (2).jpeg" },
        description: "Seeking degen to launch $CLINTON token across 26 different chains. Must have experience coordinating complex tokenomics while maintaining plausible deniability. Africa charity wallet experience a plus.",
        requirements: ["26+ successful launches", "Secret Service-level OpSec", "Liquidity migration expertise", "DOJ document shredding (decentralized)"],
        benefits: ["Unlimited airdrops", "Foundation wallet keys", "WH.eth ENS domain", "Offshore staking pools"]
    },
    {
        title: "NFT Talent Scout / Onboarding Specialist",
        company: "MC2 Metaverse Models",
        location: "Paris / NYC / Little St. James Island DAO",
        salary: "Commission on all mint revenues + Island NFT",
        snippet: "Scout new PFP collections & onboard creators.<ul><li>70+ collection launches.</li><li>Must have 1988 CBS exposé immunity.</li></ul>",
        postedBy: {
            name: "Jean-Luc Brunel", initials: "JLB", color: "#002395", image: "/Jean-Luc Brunel.jpeg"
        },
        description: "Elite NFT agency seeking scouts for next-gen PFP projects. Extensive travel to crypto conferences required. Must identify emerging talent for high-value collections and manage pipeline from discovery to mint.",
        requirements: ["70+ flights to NFT events", "MC2 multi-sig wallet access", "Background in Web3 fashion", "Fluent in Solidity"],
        benefits: ["Island DAO citizenship", "Private jet funded by rugpull", "Bored Ape derivative rights", "Tax haven LLC setup"]
    },
    {
        title: "DeFi Protocol Advisor (Oscar-Winning)",
        company: "$SPACEY Token Foundation",
        location: "London, UK (Pilot seat on rocket to moon)",
        salary: "200K $SPACEY/year",
        snippet: "Advise on DeFi protocol launches.<ul><li>30+ years method acting as profitable trader.</li><li>Pilot seat in rug pull experience.</li></ul>",
        postedBy: { name: "Kevin Spacey", initials: "KS", color: "#000000", image: "/Kevin spacey.jpeg" },
        description: "Oscar-winning DeFi foundation seeks protocol advisor. Must have extensive experience pretending protocols are sustainable. Comfortable with unconventional tokenomics (non-consensual liquidity removal).",
        requirements: ["Oscar-level performance in AMAs", "Africa trip charity rug experience", "Method acting as Satoshi", "Pilot seat during exit scam"],
        benefits: ["Locked tokens (just kidding)", "Private key to treasury", "Hollywood connections for pump campaigns", "Immunity from SEC"]
    },
    {
        title: "Crypto Fund Manager / $158M Exit Liquidity Provider",
        company: "Apollo Degen Ventures",
        location: "NY (Wall St. to Crypto St.)",
        salary: "$158M advisory fee in stablecoins",
        snippet: "Manage whale wallets & provide exit liquidity.<ul><li>CEO resignation insurance policies.</li><li>$158M single-trade execution.</li></ul>",
        postedBy: {
            name: "Leon Black", initials: "LB", color: "#1C1C1C", image: "/Leon Black.jpeg"
        },
        description: "Elite crypto fund seeks liquidity manager for ultra-whale clients. Must specialize in helping founders cash out at ATH while retail buys the dip. Experience with complex offshore wallet structures and CEO exit strategies required.",
        requirements: ["$100M+ OTC desk experience", "Tax-loss harvesting (for whales only)", "Crisis management (bear markets)", "Board coup coordination"],
        benefits: ["$158M carry on exits", "Apollo Degen DAO governance", "Offshore cold storage", "Private island mining farm"]
    },
    {
        title: "Shitcoin Brand Ambassador / Power of Attorney Holder",
        company: "$WEXNER Lingerie Coin",
        location: "New Albany, OH (VS Secret Wallet)",
        salary: "$77M in $WEXNER tokens (gifted)",
        snippet: "Represent exclusive shitcoin empire.<ul><li>Power of Attorney over all wallets.</li><li>Only client, zero transparency.</li></ul>",
        postedBy: { name: "Les Wexner", initials: "LW", color: "#000000", image: "/Lex wexne.jpeg" },
        description: "Billionaire-backed shitcoin seeks brand ambassador with complete wallet control. Must be sole focus with unquestioning trust. All private keys provided. Zero audit trail required.",
        requirements: ["Power of Attorney over seed phrases", "Victoria's Secret shitcion shill experience", "Complete NDA signing", "Tax evasion structuring"],
        benefits: ["$77M airdrop history", "Unlimited token minting rights", "Private island staking pool", "Billionaire lifestyle (until rugpull)"]
    },
    {
        title: "Crypto Legal Defense / SEC Lawsuit Coordinator",
        company: "Dershowitz DeFi Defense",
        location: "Miami Beach, FL (Island-based LLC)",
        salary: "$500/hour + 6 immunity tokens",
        snippet: "Defend shitcoin founders from SEC.<ul><li>Island jurisdiction arbitrage.</li><li>6+ securities fraud accusations handled.</li></ul>",
        postedBy: { name: "Alan Dershowitz", initials: "AD", color: "#8B0000", image: "/Alan Dershowitz.jpeg" },
        description: "Harvard crypto lawyer seeks legal coordinator for founder defense cases. O.J.-style defense team for DeFi scammers. Must be comfortable with controversial ponzi schemes and DAO treasury heists.",
        requirements: ["Harvard blockchain credentials", "Celebrity founder defense", "Flight log wallet tracking", "Island tax haven structuring"],
        benefits: ["$500/hour + ETH gas", "High-profile rug defense", "CNBC exposure during trials", "Legal legend in Crypto Twitter"]
    },
    {
        title: "Crypto Banking Bridge / $75M Settlement Manager",
        company: "Barclays DeFi Exit Ramp",
        location: "NYC (JP Morgan to Crypto pipeline)",
        salary: "$75M budget for settlements",
        snippet: "Bridge TradFi to DeFi for whales.<ul><li>1,200+ email chains with Epstein wallet.</li><li>Forced CEO resignation experience.</li></ul>",
        postedBy: { name: "Jes Staley", initials: "JS", color: "#00AEEF", image: "/Jes Staley.jpeg" },
        description: "Former Barclays/JP Morgan exec seeks crypto bridge manager. Must handle massive correspondence about offshore wallet setups. Navigate corporate exits while securing golden parachute airdrops.",
        requirements: ["Island-based exchange accounts", "1,200+ KYC bypass emails", "CEO-level rugpull coordination", "TradFi to shitcoin pipeline"],
        benefits: ["$75M rug settlement fund", "Banking + DeFi elite access", "Multi-sig treasury control", "Exit scam insurance policy"]
    },
    {
        title: "Fashion NFT Influencer / PFP Promoter",
        company: "$NAOMI NFT Collection",
        location: "London, UK (Metaverse runway)",
        salary: "150K $NAOMI + 10% royalties",
        snippet: "Promote supermodel NFT collection.<ul><li>Flight log wallet tracking.</li><li>Black book contact list for airdrops.</li></ul>",
        postedBy: { name: "Naomi Campbell", initials: "NC", color: "#FF1493", image: "/naomi campbell.jpeg" },
        description: "Supermodel NFT project seeks influencer liaison. Must manage complex airdrop schedules, coordinate with whale collectors, and maintain discretion about insider mint access.",
        requirements: ["Flight log of wallet connections", "Black book for WL spots", "Fashion x Crypto knowledge", "International conference circuit"],
        benefits: ["Supermodel NFT collection", "Paris Fashion Week crypto parties", "Private jet to NFT.NYC", "Elite degen group chats"]
    },
    {
        title: "Celebrity Token Launch Coordinator",
        company: "$TUCKER Memecoin Studios",
        location: "LA (Hollywood to Solana pipeline)",
        salary: "175K $TUCKER/year + royalties",
        snippet: "Launch celebrity memecoins & coordinate influencer pumps.<ul><li>Africa charity rugpull experience.</li><li>Flight manifest token holder lists.</li></ul>",
        postedBy: { name: "Chris Tucker", initials: "CT", color: "#FFD700", image: "/chris tucker.jpeg" },
        description: "Actor/comedian token studio seeks launch coordinator. Must have experience with celebrity charity scams and maintaining flexible tokenomics. International Telegram shill groups required.",
        requirements: ["Charity exit scam coordination", "Influencer pump campaign management", "Celebrity wrangling for AMAs", "Comedy in bear markets"],
        benefits: ["A-list crypto endorsements", "Conference VIP access", "Memecoin premiere events", "Film production DAO funding"]
    },
    {
        title: "DAO Treasury Manager / Multi-Sig Co-Conspirator",
        company: "Epstein DeFi Enterprises",
        location: "NYC / Palm Beach / USVI DAO",
        salary: "200K + full immunity NFT",
        snippet: "Manage DAO treasury & coordinate multi-sig drains.<ul><li>20+ years embezzlement experience.</li><li>Co-conspirator-level OpSec.</li></ul>",
        postedBy: { name: "Sarah Kellen", initials: "SK", color: "#4B0082", image: "/Sarah Kellen.jpeg" },
        description: "High-level DeFi protocol seeks treasury scheduler for complex multi-location wallet management. Must handle sensitive private keys with complete discretion. Immunity token included in compensation.",
        requirements: ["Co-conspirator DAO governance", "Multi-sig drain expertise", "20+ year commitment to silence", "Identity change after rugpull"],
        benefits: ["Full immunity smart contract", "Witness protection seedphrase", "Treasury access", "New identity airdrop"]
    },
    {
        title: "Private Jet NFT Coordinator / Flight Log Minter",
        company: "Aviation DAO (Lolita Express on blockchain)",
        location: "Florida (Web3 Pilot School)",
        salary: "250K + pilot training + immunity token",
        snippet: "Coordinate private jet NFTs & flight log mints.<ul><li>Pilot license to moon.</li><li>Victim-to-participant token swap pipeline.</li></ul>",
        postedBy: { name: "Nadia Marcinkova", initials: "NM", color: "#8B008B", image: "/Nadia Marcinkova.jpeg" },
        description: "Private aviation DAO seeks NFT coordinator. Unique background transitioning from traditional flight ops to on-chain aviation. Pilot training provided. Full immunity governance token allocation.",
        requirements: ["Aviation NFT interest", "Immunity token holder", "Flight school to crypto pipeline", "Identity rebranding complete"],
        benefits: ["Free pilot training (DAO funded)", "Immunity governance rights", "Aviation career pivot", "Fresh start + new wallet"]
    },
    {
        title: "Whale Wallet Manager / Billionaire Degen Coordinator",
        company: "Dubin Crypto Capital",
        location: "NYC (Hedge Fund to DeFi)",
        salary: "300K/year + 2% AUM",
        snippet: "Manage billionaire whale portfolios.<ul><li>Island-based cold storage.</li><li>Epstein wallet employment history.</li></ul>",
        postedBy: { name: "Glenn Dubin", initials: "GD", color: "#006400", image: "/Glenn Dubin.jpeg" },
        description: "Billionaire crypto fund seeks whale coordinator. Must navigate complex personal and financial relationships while managing 9-figure portfolios. Island jurisdiction cold storage included.",
        requirements: ["Island exchange accounts", "Flight log wallet audits", "Employer background with Epstein wallets", "Spouse's ex-bf's crypto holdings"],
        benefits: ["300K + carried interest", "Billionaire degen lifestyle", "Island cold storage access", "Hedge fund + DeFi mastery"]
    }
];

function renderJobs(jobsToRender) {
    const feed = document.getElementById('job-feed');
    feed.innerHTML = '';

    if (jobsToRender.length === 0) {
        feed.innerHTML = '<div style="text-align:center; padding: 2rem;">No jobs found. Maybe try "Professional Napper"?</div>';
        return;
    }

    jobsToRender.forEach((job, index) => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.setAttribute('data-job-index', index);
        const avatarHtml = job.postedBy.image 
            ? `<img src="${job.postedBy.image}" alt="${job.postedBy.name}" class="profile-avatar-img" />`
            : `<div class="profile-avatar" style="background-color: ${job.postedBy.color}">${job.postedBy.initials}</div>`;
        
        card.innerHTML = `
            <div class="profile-header">
                ${avatarHtml}
                <div class="profile-info">
                    <div class="profile-name">${job.postedBy.name}</div>
                    <div class="profile-subtitle">Posted by ${job.postedBy.name}</div>
                </div>
            </div>
            <h2 class="job-title">${job.title}</h2>
            <div class="company-name">${job.company}</div>
            <div class="location">${job.location}</div>
            <div class="salary-tag">${job.salary}</div>
            <div class="snippet">${job.snippet}</div>
            <button class="apply-btn">Apply Now</button>
        `;

        // Add click handler for Apply button
        const applyBtn = card.querySelector('.apply-btn');
        applyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            handleApply(applyBtn);
        });

        // Add click handler to open modal (except on the apply button)
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('apply-btn')) {
                openJobModal(job);
            }
        });
        feed.appendChild(card);
    });
}

// Modal Functions
function openJobModal(job) {
    const modal = document.getElementById('job-modal');
    const modalContent = document.getElementById('modal-job-content');

    const requirementsList = job.requirements ? `
        <div class="modal-section">
            <h3>Requirements</h3>
            <ul>
                ${job.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        </div>
    ` : '';

    const benefitsList = job.benefits ? `
        <div class="modal-section">
            <h3>Benefits</h3>
            <ul>
                ${job.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
        </div>
    ` : '';

    const modalAvatarHtml = job.postedBy.image 
        ? `<img src="${job.postedBy.image}" alt="${job.postedBy.name}" class="profile-avatar-img" />`
        : `<div class="profile-avatar" style="background-color: ${job.postedBy.color}">${job.postedBy.initials}</div>`;
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="profile-header">
                ${modalAvatarHtml}
                <div class="profile-info">
                    <div class="profile-name">${job.postedBy.name}</div>
                    <div class="profile-subtitle">Posted by ${job.postedBy.name}</div>
                </div>
            </div>
        </div>
        <h2>${job.title}</h2>
        <div class="company-name">${job.company}</div>
        <div class="location">📍 ${job.location}</div>
        <div class="salary-tag">💰 ${job.salary}</div>
        
        <div class="modal-section">
            <h3>Job Description</h3>
            <p>${job.description || 'No detailed description available.'}</p>
        </div>
        
        ${requirementsList}
        ${benefitsList}
        
        <div class="modal-footer">
            <button class="btn-primary" onclick="handleModalApply()">Apply now</button>
        </div>
    `;

    modal.style.display = 'flex';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Handle Apply button click
function handleApply(button) {
    // Change button to applied state
    button.classList.add('applied');
    button.innerHTML = '✓ Applied!';
    button.disabled = true;

    // Revert after 2 seconds
    setTimeout(() => {
        button.classList.remove('applied');
        button.innerHTML = 'Apply Now';
        button.disabled = false;
    }, 2000);
}

function closeJobModal() {
    const modal = document.getElementById('job-modal');
    modal.style.display = 'none';
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function handleModalApply() {
    const applyBtn = document.querySelector('.modal-footer .btn-primary');
    if (applyBtn) {
        const originalText = applyBtn.textContent;
        applyBtn.textContent = '✓ Applied!';
        applyBtn.style.backgroundColor = '#10b981';
        applyBtn.disabled = true;
        
        setTimeout(() => {
            applyBtn.textContent = originalText;
            applyBtn.style.backgroundColor = '';
            applyBtn.disabled = false;
        }, 2000);
    }
}

// Close modal when clicking outside
document.getElementById('job-modal').addEventListener('click', (e) => {
    if (e.target.id === 'job-modal') {
        closeJobModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('job-modal');
        if (modal.style.display === 'flex') {
            closeJobModal();
        }
    }
});

document.getElementById('find-jobs-btn').addEventListener('click', () => {
    const what = document.getElementById('what-input').value.toLowerCase();
    const where = document.getElementById('where-input').value.toLowerCase();

    const filtered = jobs.filter(job => {
        const matchTitle = job.title.toLowerCase().includes(what) || job.company.toLowerCase().includes(what);
        const matchLocation = job.location.toLowerCase().includes(where);
        return matchTitle && matchLocation;
    });

    renderJobs(filtered);
});


// Initial Render
renderJobs(jobs);

// Copy to Clipboard Functionality
const copyBtn = document.getElementById('copy-btn');
const contractAddress = document.getElementById('contract-address');

if (copyBtn && contractAddress) {
    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(contractAddress.textContent);
            copyBtn.textContent = 'Copied!';
            copyBtn.classList.add('copied');

            setTimeout(() => {
                copyBtn.textContent = 'Copy';
                copyBtn.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            copyBtn.textContent = 'Error';
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
            }, 2000);
        }
    });
}
