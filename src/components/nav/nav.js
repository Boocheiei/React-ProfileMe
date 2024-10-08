import './nav.css';

function Nav (){
    return (
    <div className="grid-nav">
        <div>
            <h1>Veerapat Booch</h1>
        </div>
        <div className="nav-logo">
            <img src='./img/logo.png'/>
        </div>
        <div className='grid-nav-meun'>
            <div>
            <h1>Home</h1>
            </div>
            <div>
            <h1>HtmlCssJs</h1>
            </div>
            <div>
            <h1>React</h1>
            </div>
        </div>
    </div>
    );
}
export default Nav;