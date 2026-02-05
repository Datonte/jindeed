const jobs = [
    {
        title: "Chief Vibe Officer",
        company: "Chill Inc.",
        location: "Remote",
        salary: "$120,000 - $180,000 a year",
        snippet: "We are looking for someone to maintain the vibes.<ul><li>Must be chill.</li><li>No bad vibes allowed.</li><li>Experience in vibing required.</li></ul>"
    },
    {
        title: "Professional Napper",
        company: "Dreamy Mattress Co.",
        location: "Bed, NY",
        salary: "$50 an hour",
        snippet: "Test our mattresses by sleeping on them. <ul><li>Must have 5+ years of sleeping experience.</li><li>Ability to sleep through alarms is a plus.</li></ul>"
    },
    {
        title: "Meme Connoisseur",
        company: "Internet Culture Labs",
        location: "Basement, CA",
        salary: "$69,420 a year",
        snippet: "Analyze and curate the dankest memes. <ul><li>Ph.D. in Memology preferred.</li><li>Must know when the narwhal bacons.</li></ul>"
    },
    {
        title: "Cat Herder",
        company: "Chaos Management Ltd.",
        location: "Meow Town, TX",
        salary: "$1,000,000 a year",
        snippet: "Literally herd cats. <ul><li>Impossible job.</li><li>High risk of scratches.</li><li>Free lint rollers provided.</li></ul>"
    },
    {
        title: "Banana Peeler",
        company: "Monkey Business",
        location: "Jungle, FL",
        salary: "$15 an hour",
        snippet: "Peel bananas for our executive monkeys. <ul><li>Fast hands required.</li><li>Do not slip on peels.</li></ul>"
    },
    {
        title: "Professional Scroll Wheeler",
        company: "Infinite Feeds Co.",
        location: "Thumb City, NV",
        salary: "$0.01 per scroll",
        snippet: "Do you have strong thumbs? We need you to scroll through content forever. <ul><li>Carpal tunnel insurance not included.</li><li>Must be able to double tap.</li></ul>"
    },
    {
        title: "Zoom Call Background Actor",
        company: "FakeBusy",
        location: "Remote",
        salary: "$20 per meeting",
        snippet: "Need to look busy? Look at us looking at you. <ul><li>Must master the 'thinking face'.</li><li>Nodding enthusiastically required.</li></ul>"
    },
    {
        title: "Keyboard Smasher",
        company: "Rage Quit Gaming",
        location: "Mom's Basement, OR",
        salary: "Replacement Keyboards provided",
        snippet: "Testing durability of gaming peripherals. <ul><li>Must have anger management issues.</li><li>High WPM (Words Per Minute) not required, but high SPM (Smashes Per Minute) is.</li></ul>"
    },
    {
        title: "Cloud yeller",
        company: "Old Man Jenkins Inc.",
        location: "Front Lawn, KY",
        salary: "Get off my lawn!",
        snippet: "Yell at clouds. That's it. <ul><li>Must provide own cane.</li><li>Loud voice required.</li></ul>"
    }
];

function renderJobs(jobsToRender) {
    const feed = document.getElementById('job-feed');
    feed.innerHTML = '';

    if (jobsToRender.length === 0) {
        feed.innerHTML = '<div style="text-align:center; padding: 2rem;">No jobs found. Maybe try "Professional Napper"?</div>';
        return;
    }

    jobsToRender.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <h2 class="job-title">${job.title}</h2>
            <div class="company-name">${job.company}</div>
            <div class="location">${job.location}</div>
            <div class="salary-tag">${job.salary}</div>
            <div class="snippet">${job.snippet}</div>
        `;
        feed.appendChild(card);
    });
}

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
