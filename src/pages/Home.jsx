import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import star from "../imges/star.svg";
import tel from "../imges/tel.svg";
import hospitel from "../imges/hospitel.svg";
import massage from "../imges/massage.svg";
import footerbg from "../imges/footer-bg.jpg";

function Home() {
    const { t } = useTranslation(); 
    const navigate = useNavigate(); 

    const handleButtonClick = () => {
        navigate("/card");
    };

    return (
        <div>
            <main className='bg-white h-[746px] text-black font-bold flex flex-col'>
                <div className='flex flex-col mx-auto justify-center gap-8 mt-20'>
                    <h3 className='text-base flex mx-auto'>{t("contactUs")}</h3>
                    <div className='text-5xl'>{t("sayHello")}</div>
                    <p className='text-sm font-normal flex flex-col items-center justify-center'>
                        {t("interestedInLearning")}
                    </p>
                </div>

                <div className='flex gap-5 mt-24 mx-auto'>
                    <div className='flex gap-3 p-5 border-2 rounded-xl'>
                        <img src={tel} alt="" />
                        <div>
                            <h3>{t("callUs")}</h3>
                            <h2>+1 (214) 960 4130</h2>
                        </div>
                    </div>
                    <div className='flex gap-3 p-5 border-2 rounded-xl'>
                        <img src={massage} alt="" />
                        <div>
                            <h3>{t("emailUs")}</h3>
                            <h2>hello@aiinfo.com</h2>
                        </div>
                    </div>
                </div>
                <div className='border-2 rounded-xl p-7 mt-4 max-w-[870px] flex gap-5 mx-auto'>
                    <img src={hospitel} alt="" />
                    <div>
                        <h3>{t("headquarters")}</h3>
                        <h2>12720 Hillcrest Road Suite 980, Dallas, TX 75230</h2>
                    </div>
                </div>
            </main>
            <footer className='bg-cover bg-center text-white bg-black h-[439px] flex flex-col mx-auto justify-center gap-14 items-center'>
                <div className='text-5xl font-semibold'>{t("signUp")}</div>
                <button onClick={handleButtonClick} className='btn btn-info text-white max-w-[202px]'>{t("getStarted")}</button>
            </footer>
        </div>
    );
}

export default Home;
