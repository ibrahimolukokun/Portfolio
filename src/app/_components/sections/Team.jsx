import Data from "@data/sections/team.json";
import Image from 'next/image';

const TeamSection = () => {
    return (
        <>
            {/* team */}
            <div className="mil-p-120-30">
                <div className="container">
                    <div className="mil-tac">
                        <h2 className="mil-fs42 mil-mb90 mil-up">{Data.title}</h2>
                    </div>
                    <div className="row mil-aic mil-jcb">
                        {Data.items.map((item, key) => (
                        <div className="col-lg-4" key={`team-item-${key}`}>
                            <div className="mil-team-card mil-mb90">
                                <div className="mil-portrait mil-mb60 mil-992-mb30 mil-up">
                                    <Image src={item.image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={item.name} className="mil-scale-img" data-value-1="1" data-value-2="1.15" />
                                </div>
                                <div className="mil-tac">
                                    <h3 className="mil-fs20 mil-mb15 mil-up">{item.name}</h3>
                                    <p className="mil-up">{item.role}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* team end */}
        </>
    );
};
export default TeamSection;