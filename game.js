
function mainSuit() {
    main("batu,gunting,kertas");
}

function mainGOS() {
    main("gajah,orang,semut");
}

function mainJari() {
    main("jempol,telunjuk,kelingking");
}

function main(daftar) {
    let pilihan = daftar.split(",");
    let user = prompt("Pilih: " + pilihan.join(", "));

    if (user == null) {
        return;
    }

    if (!pilihan.includes(user)) {
        alert("Pilihan tidak tersedia!");
        return;
    }

    let komputer = pilihan[Math.floor(Math.random() * pilihan.length)];
    let hasil = "";

    if (user == komputer) {
        hasil = "Seri!";
    } else if (
        (user == "batu" && komputer == "gunting") ||
        (user == "gunting" && komputer == "kertas") ||
        (user == "kertas" && komputer == "batu") ||
        (user == "gajah" && komputer == "orang") ||
        (user == "orang" && komputer == "semut") ||
        (user == "semut" && komputer == "gajah") ||
        (user == "jempol" && komputer == "telunjuk") ||
        (user == "telunjuk" && komputer == "kelingking") ||
        (user == "kelingking" && komputer == "jempol")
    ) {
        hasil = "Yeayyy kamu menang horeeee🥳 !";
    } else {
        hasil = "Sabar ya huuu kalahhh😞!";
        
    }

    alert("Pilihan kamu: " + user +
          "\nPilihan komputer: " + komputer +
          "\nHasil: " + hasil);
}
