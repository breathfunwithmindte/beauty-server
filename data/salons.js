module.exports = () => {
    let salons = [];

    const avatars = [
        "/public/images/0.jpeg", "/public/images/1.jpeg", "/public/images/2.jpeg", "/public/images/3.jpeg", "/public/images/4.jpeg", 
        "/public/images/5.jpg", "/public/images/6.jpg", "/public/images/7.jpg", "/public/images/8.jpg"
    ]

    const descriptions = [
        "Περιποιηθείτε τα νύχια και το πρόσωπο σας στην Πάτρα. Επισκεφθείτε το χώρο μας και απολαύστε ένα. μοναδικό ταξίδι στον κόσμο της ομορφιάς",
        "Μανικιούρ απλό και ημιμόνιμο. Φυσική ενίσχυση νυχιού με gel και ακρυλικό. Χτιστά νύχια μικρού και μεγάλου μήκους με gel και ακρυλικό. Συντήρηση σε χτιστά νύχια με gel και ακρυλικό. Πεντικιούρ απλό και ημιμόνιμο. Ποδιατρικό πεντικιούρ. Αφαίρεση ημιμόνιμου, gel και ακρυλικού",
        "Τατουάζ φρυδιών – microblading, Extension βλεφαρίδων, Σχηματισμός φρυδιών, Επαγγελματικό μακιγιάζ, Μη ενέσιμο υαλουρονικό"
    ]

    const beayty_deals = [
        { "title": "Φουλ Ομορφιά με 20€", "deal": 0  },
        { "title": "1+1", "deal": 1 },
        { "title": "Προσφορά Ημέρας", "deal": 2 }
    ]
    
    const availability = [
        true, true, true, false, true, false, true, true
    ]

    for (let i = 0; i < 200; i++) {
        salons.push({
            avatar: avatars[random(0,7)],
            name: "Some salon for example with index " + i,
            services: [random(0,7), random(0, 7)],
            rating: 4.4,
            beautydeals: [beayty_deals[random(0, 2)].deal, beayty_deals[random(0, 2)].deal],
            availability: availability[random(0, 7)],
            description: descriptions[random(0,2)],
            total_rating: 2222,
            packages: ["Beauty~next~door~deals"]
        })
        
    }
    return salons


}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }