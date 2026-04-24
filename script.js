const artData = [
    { title: "Marble Silence", cat: "Statues", url: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800" },
    { title: "Crimson Abstract", cat: "Paintings", url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800" },
    { title: "Digital Distortion", cat: "Digital", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800" },
    { title: "Golden Hour", cat: "Paintings", url: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800" },
    { title: "The Thinker", cat: "Statues", url: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800" },
    { title: "Cyber Landscape", cat: "Digital", url: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800" }
];

const gallery = document.getElementById('gallery');
const sidePanel = document.getElementById('side-panel');

function render(filter = 'all') {
    gallery.innerHTML = "";
    const items = filter === 'all' ? artData : artData.filter(a => a.cat === filter);

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'art-wrapper';
        
        // Error handling: If image fails, show placeholder text
        div.innerHTML = `<img src="${item.url}" alt="${item.title}" onerror="this.parentElement.innerHTML='<div style=padding:100px>Image Failed to Load</div>'">`;
        
        div.onclick = () => {
            document.getElementById('p-title').innerText = item.title;
            document.getElementById('p-category').innerText = item.cat;
            document.getElementById('p-img-preview').src = item.url;
            sidePanel.classList.add('open');
        };
        gallery.appendChild(div);
    });
}

// UI Controls
document.querySelector('.close-panel').onclick = () => sidePanel.classList.remove('open');

document.querySelectorAll('.filter-link').forEach(link => {
    link.onclick = (e) => {
        document.querySelectorAll('.filter-link').forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        render(e.target.dataset.category);
    };
});

// Start the gallery
render();