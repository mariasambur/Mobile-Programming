//Exercise#2 Mobile Programming 
//nomor 1
function mandi(){
    console.log("Mandi");
}
mandi();


function sarapan(callback){
    setTimeout(()=>{
        console.log("Sarapan tertunda 3 detik");
        callback();
    }, 3000);
}
sarapan(berangkatSekolah);


function berangkatSekolah(){
    console.log("Berangkat Sekolah");
}


//nomor 2 
function helloWorld() {
    return helloWorld = new Promise((resolve) => {
            resolve("Hello World");
    })
};

let messsages = async () => {
    try{
        const msg = await helloWorld();
        setTimeout(() => {
            console.log(msg);
        },2000);
    }
    catch(error)
    {
        console.log(error);
    }
    };
messsages()

//nomor 3 
function ambilDataUSer(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((user) => console.log(user))
    
};
ambilDataUSer();

