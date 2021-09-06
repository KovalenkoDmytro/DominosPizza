import './Style/Main.scss';
function Main() {
    return (
        <>
            <div className="layout">
                <div className="containerFirst___item">
                    <div className="--content__item --first">
                        <div>promocja</div>
                        <h2>2 pizze w cenie 1</h2>
                        <img src="https://www.dominospizza.pl/DominosPizza/media/Images/modules/small%20banners/desktop/1200x1130domin-page_1.jpg" alt="back to school" />
                    </div>
                    <div className="--content__item --second">
                        <h2 className="item__title"> Masz ochotę na pizzę?</h2>
                        <div className="item__content_wrapper">
                            <div className="item__content">
                                <img src="https://www.dominospizza.pl/getmedia/01a4fbdd-c165-40c9-882a-62ac87715f37/dominos_skuter.gif.aspx" alt="" />
                                <span>Gotowe już w 30 minut</span>
                                <button>Zamów z dostawą</button>
                            </div>
                            <div className="item__content">
                                <img src="https://www.dominospizza.pl/getmedia/d6c4e4a2-f52a-45a1-b3bc-c7da00e4f58f/odbior_osobisty.gif.aspx" alt="" />
                                <span>Gotowe już w 15 minut</span>
                                <button> Zamów z odbiorem</button>
                            </div>

                        </div>
                        <div className="contact">
                            <a href="tel:+48 22 209 00 00">+48 22 209 00 00</a>
                        </div>
                    </div>
                </div>
                <div className="containerFirst___item --second">
                    <img className="newsletter__background" src="https://www.dominospizza.pl/DominosPizza/media/Images/modules/mainNewsletter/desktop/NEWbanner-glowna-dominos.webp" alt="" />
                    <div className="newsletter">
                        <h2 className="newsletter__title">Odbierz rabat -50% na drugą pizzę </h2>
                        <p className="newsletter__subtittle">Zapisz się do naszego newslettera i otrzymuj najlepsze promocje</p>
                        <form action="">
                            <div className="email"><input type="email" name="" id="" placeholder="" /></div>

                            <div className="privatPolitic">
                                <input type="checkbox" name="" id="" />
                                <p>Wyrażam zgodę na kontaktowanie się ze mną, w tym na przesyłanie informacji handlowych i marketingowych o Pizza Domino’s od DP Polska S.A. z siedzibą w Warszawie za pośrednictwem środków komunikacji elektronicznej (e-mail), jak również wyrażam zgodę na przetwarzanie w tym celu danych osobowych (adresu e-mail) przez DP Polska S.A. z siedzibą w Warszawie. Podstawą prawną przetwarzania danych jest art. 6 ust. 1 lit. a) RODO. Przysługuje mi prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.</p>
                            </div>
                            <button type="submit">Odbierz rabat</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;