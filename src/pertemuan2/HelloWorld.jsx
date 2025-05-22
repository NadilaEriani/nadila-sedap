export default function HelloWorld(){
    // export default ini orng tua, tidak bisa double
    const propsUserCard = {
        nama:"Goku",
        nim:"999999",
        tanggal:"2025-01-01"
    }
    return(
        <div>
        
            <h1 className="hello"> Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
            nama= "Nadila Eriani"
            nim="2355301155"
            tanggal={new Date().toLocaleDateString()}
            />
            <UserCard{...propsUserCard}/>
            <img src="img/gambar1.png" alt="logo" className="logo"/>
        </div>
    )
}

function GreetingBinjai(){
    return(
        <small> Salam dari Binjai</small>
    )
}

function QuoteText(){
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return(
        <div>
            <hr />
            <p>{text.toLocaleLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}
// kalau function penamaannya harus diawal huruf besar, nanti error

function UserCard(props){
    return(
        <div>
            <hr />
            <h3>Nama: {props.nama}</h3>
            <p>NIM :  {props.nim}</p>
            <p>Tanggal :  {props.tanggal}</p>
        </div>
    )
}