const express = require("express");


const app = express();
app.use(require("cors")());
app.listen(5000);
app.use("/public", express.static(require("path").resolve() + "/public"))

app.get("/", (req, res) => {
    setTimeout(() => {
        res.status(400).json({ message: "okkk", nana: "nana" });
    }, 1000);
})

console.log("hello world")



app.get("/api/v1/stores/:id", (req, res) => {

    // todo -> prepare the availability of the store;


    res.status(200).json({
        message: "ok",
        document: {
            user: "some mongodbid",
            name: "testone",
            avatar: "/public/images/0.jpeg",
            cover: "/public/images/00.jpg",
            title: "Testone Beauty salon here 01",
            description: `Το κομμωτήριο Trust the Hairdresser και η δημιουργική ομάδα του με επικεφαλής το Niko τολμούν και προτείνουν πρωτοποριακά Styling στο ανδρικό και γυναικείο κοινό του με συνεχή ενημέρωση, με σεμινάρια στο εξωτερικό και στη χώρα της μόδας την Ιταλία Η χαλαρωτική ατμόσφαιρα, η υψηλή αισθητική και το πάθος της ομάδας, προδιαθέτουν για το καλύτερο δυνατό αποτέλεσμα . Με επαγγελματισμό και την 25ετή πείρα του Νίκου , με απόλυτο σεβασμό στις ανάγκες και στις επιθυμίες του πελάτη προτείνουν και δημιουργούν με βάση τις νέες τάσεις τις μόδας... Στο χώρο μας θα βρέιτε το ιδανικό περιβάλλον για την περιποίηση των μαλλιών σας, των άνω και κάτω άκρων αλλά και μακιγιάζ για όλες τις περιστάσεις ! Για περισσότερες πληροφορίες μπορείτε να μας βρείτε στη σελίδα μας στο facebook: trust the hairdresser`,
            policy: "Θα μπορείς να ακυρώσεις την κράτησή σου έως και 3 ώρες πριν από το ραντεβού σου. Αν έχεις πληρώσει online, θα λάβεις πίστωση Uala στο πορτοφόλι σου",
            location_address: "Αγία Παρασκευή",
            services: [],
            products: [
                { title: "Αποτρίχωση άνω χείλος", category: "ΑΠΟΤΡΙΧΩΣΗ", description: "aποτρίχωση άνω χείλος", time_required: "15min" },
                { title: "Αποτρίχωση κοιλιάς", category: "ΑΠΟΤΡΙΧΩΣΗ", description: "Αποτρίχωση με κερί στην περιοχή της κοιλιάς.", time_required: "15min" },
                { title: "Αποτρίχωση με κερί - μασχάλη", category: "ΑΠΟΤΡΙΧΩΣΗ", description: "", time_required: "15min" },
                { title: "Αποτρίχωση φρύδια", category: "ΑΠΟΤΡΙΧΩΣΗ", description: "", time_required: "15min" },
                { title: "Αποτρίχωση χέρια", category: "ΑΠΟΤΡΙΧΩΣΗ", description: "Αποτρίχωση φρύδια με κλωστή - τσιμπιδάκι", time_required: "15min" },

                { title: "Lash lift", category: "ΑΠΟΤΡΙΧΩΣΗ", description: "Το lash lift είναι μια υπηρεσία που δίνει μήκος, όγκο και προστασία στις φυσικές σας βλεφαρίδες. Πραγματοποιείται στην γραμμή του άνω βλεφάρου, με τη βοήθεια ειδικών εργαλείων και κερατίνης. Σας επιτρέπει να αποκτήσετε φυσικές γυριστές βλεφαρίδες, χωρίς να χρειάζεστε mascara ή να καταφύγετε στην τοποθέτηση ψεύτικων βλεφαρίδων (extension). Το αποτέλεσμα διαρκεί από 5 έως 7 εβδομάδες.", time_required: "15min" },
                { title: "Αποτρίχωση κοιλιάς", category: "ΑΠΟΤΡΙΧΩΣΗ", description: "Αποτρίχωση με κερί στην περιοχή της κοιλιάς.", time_required: "15min" },
                { title: "Συντήρηση βλεφαρίδων one by one", category: "ΑΠΟΤΡΙΧΩΣΗ", description: "Η συντήρηση βλεφαρίδων one by one είναι μια διαδικασία που πραγματοποιείται έπειτα από την αρχική τοποθέτηση των extensions βλεφαρίδων, οι οποίες, λόγω του φυσικού κύκλου ζωής των τριχών και της πτώσης τους, δεν φαίνονται πλέον ομοιόμορφες. Κατά τη διάρκεια αυτής της υπηρεσίας, εφαρμόζονται μεμονωμένα extensions που δίνουν ένα ομοιόμορφο τελικό αποτέλεσμα και τονίζουν το βλέμμα.", time_required: "15min" },

                { title: "Αποτρίχωση άνω χείλος ΠΡΟΣΩΠΟ", category: "ΠΡΟΣΩΠΟ", description: "aποτρίχωση άνω χείλος", time_required: "15min" },
                { title: "Αποτρίχωση κοιλιάς ΠΡΟΣΩΠΟ", category: "ΠΡΟΣΩΠΟ", description: "Αποτρίχωση με κερί στην περιοχή της κοιλιάς.", time_required: "15min" },
                { title: "Αποτρίχωση με κερί - μασχάλη ΠΡΟΣΩΠΟ", category: "ΠΡΟΣΩΠΟ", description: "", time_required: "15min" },
                { title: "Αποτρίχωση φρύδια podia", category: "ΠΟΔΙΑ", description: "", time_required: "15min" },
                { title: "Αποτρίχωση χέρια podia", category: "ΠΟΔΙΑ", description: "Αποτρίχωση φρύδια με κλωστή - τσιμπιδάκι", time_required: "15min" },
                { title: "Αποτρίχωση άνω χείλος ΦΟΡΜΑΡΙΣΜΑ", category: "ΦΟΡΜΑΡΙΣΜΑ", description: "aποτρίχωση άνω χείλος", time_required: "15min" },
                { title: "Αποτρίχωση κοιλιάς ΦΟΡΜΑΡΙΣΜΑ", category: "ΦΟΡΜΑΡΙΣΜΑ", description: "Αποτρίχωση με κερί στην περιοχή της κοιλιάς.", time_required: "15min" },
                { title: "Αποτρίχωση με κερί - μασχάλη ΦΟΡΜΑΡΙΣΜΑ", category: "ΦΟΡΜΑΡΙΣΜΑ", description: "", time_required: "15min" },
                { title: "Αποτρίχωση φρύδια ΦΟΡΜΑΡΙΣΜΑ", category: "ΦΟΡΜΑΡΙΣΜΑ", description: "", time_required: "15min" },
                { title: "Αποτρίχωση χέρια ΦΟΡΜΑΡΙΣΜΑ", category: "ΦΟΡΜΑΡΙΣΜΑ", description: "Αποτρίχωση φρύδια με κλωστή - τσιμπιδάκι", time_required: "15min" },
                { title: "Αποτρίχωση άνω χείλος ΧΕΡΙΑ", category: "ΧΕΡΙΑ", description: "aποτρίχωση άνω χείλος", time_required: "15min" },
                { title: "Αποτρίχωση κοιλιάς ΧΕΡΙΑ", category: "ΧΕΡΙΑ", description: "Αποτρίχωση με κερί στην περιοχή της κοιλιάς.", time_required: "15min" },
                { title: "Αποτρίχωση με κερί - μασχάλη ΧΕΡΙΑ", category: "ΧΕΡΙΑ", description: "", time_required: "15min" },
                { title: "Αποτρίχωση φρύδια ΧΕΡΙΑ", category: "ΧΕΡΙΑ", description: "", time_required: "15min" },
                { title: "Αποτρίχωση χέρια ΧΕΡΙΑ", category: "ΧΕΡΙΑ", description: "Αποτρίχωση φρύδια με κλωστή - τσιμπιδάκι", time_required: "15min" }
            ],
            categories: ["ΑΠΟΤΡΙΧΩΣΗ", "ΠΡΟΣΩΠΟ", "ΠΟΔΙΑ", "ΦΟΡΜΑΡΙΣΜΑ", "ΧΕΡΙΑ"],
            employers: [],
            review: 4.4,
            total_reviews: 256
        }
    })
})

const salons_gn = require("./data/salons")
let salons = [];

salons = salons_gn();

setInterval(() => {
    salons = salons_gn();
}, 100000);

app.get("/api/v1/salons/read", (req, res) => {
   let beautydeals;
   if(typeof req.query.beautydeals === "string") {
    beautydeals = [req.query.beautydeals]
   }
   if(req.query.beautydeals instanceof Array === true) {
    beautydeals = req.query.beautydeals
   }
   const items = salons.filter(f => {
    let result = [];
    if(beautydeals) {
        console.log(f.beautydeals, beautydeals)
        result.push(f.beautydeals.some(s => beautydeals.some(ss => ss == s)))
    }
    if(req.query.availability == "0" || req.query.availability == "1") {
        result.push(f.availability === true);
    }
    if(req.query.category) {
        result.push(f.services.some(s => s == req.query.category))
    }
    return !result.some(s => s == false)
   })
   return res.status(200).json({ message: "", data: items.slice(0, 100), total: items.length })
})