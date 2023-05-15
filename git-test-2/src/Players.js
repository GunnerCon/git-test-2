import React,{ Component } from "react"
export default class player extends Component{
    render(){
        return(
            <div className="container">
         <div className="column">
            <div className="card">
                <img src="assets/images/cr.jpg"></img>
                <h3>Cristiano Ronaldo</h3>
                <p className="title">Manchester United</p>
                <p><button>Detail</button></p>
            </div>
        </div>  
        <div className="column">
            <div className="card">
                <img src="assets/images/messi.jpg"></img>
                <h3>Cristiano Ronaldo</h3>
                <p className="title">PSG</p>
                <p><button>Detail</button></p>
            </div>
        </div>     
        <div className="column">
            <div className="card">
                <img src="assets/images/kante.jpg"></img>
                <h3>Kante</h3>
                <p className="title">Chelsea</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className="column">
            <div className="card">
                <img src="assets/images/neymar.jpg"></img>
                <h3>Neymar Jr</h3>
                <p className="title">PSG</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className="column">
            <div className="card">
                <img src="assets/images/kane.jpg"></img>
                <h3>Harry Kane</h3>
                <p className="title">Tottenham Hospur</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className="column">
            <div className="card">
                <img src="assets/images/m.jpg"></img>
                <h3>Mbappe</h3>
                <p className="title">PSG</p>
                <p><button>Detail</button></p>
            </div>
        </div>
         
            </div>
        )
    }
}