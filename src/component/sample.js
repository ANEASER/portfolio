import React from 'react';
import 'bulma/css/bulma.css';
import '../App.css';

function Sample() {

  return (
    <div>
      <div id="samples" className="my-3" style={{ color: 'rgb(31, 72, 255)', textAlign: 'center', fontSize: '220%' }}>SAMLE PROJECTS</div>
            <div className="main_container mt-1" style={{ margin: '1em 1em 1em 1em' }}>
            <div className="card sub_containers px-2 my-2 mx-2" style={{ width: '30%' }}>
                <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://bnz06pap004files.storage.live.com/y4mojpem7myF5RPx3oq6xJYOukv7vWnfRLWrq-lvmLa7Oh1_tT2Zr3g8VnNteA4SV0JnQj4ajKZBIEYSL0S9-QNfmlllTnvudhjeCbJ9_ksV4bsuLDzFmQVZ8T25zuaVbSqzubjYmzCDdbMpB3HCmsCeimLHcXEQijilwSkgLXCNLl_RU1LQBV8Dap9XWpUsKfC?width=1279&height=959&cropmode=none" alt="Placeholder image" />
                </figure>
                </div>
                <div className="card-content" style={{ background: 'rgb(31, 72, 255, 0.712)' }}>
                <div className="media">
                    <div className="media">
                    </div>
                    <div className="media-content">
                    <p className="title is-5 ml-0" style={{ fontFamily: 'Segoe UI', fontWeight: 'bold' }}>MonekeyPox classification</p>
                    </div>
                </div>
                <div className="content">
                    Tensorflow keras classification model with 97% f1 score.and 97% accuracy to classify MonekeyPox from other similar skins use transferlearning VGG model
                    <br />
                    <time dateTime="2016-1-1">5 Jan 2023</time>
                </div>
                </div>
            </div>
            <div className="card sub_containers px-2 my-2 mx-2" style={{ width: '30%' }}>
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src="https://bnz06pap004files.storage.live.com/y4mXUEDYgQ7i04gI91CynadyOCNYObSBJ9FjYrWtvCA4BqkodJALqp0B1GIBgK7pSF0jdreLUvUtXdcKlSFQkbP8MMyBqvqHCOP1Vh4rFP2-Pcmh8neR8RJhmolEOvko8MeWY8EB0vxsb84rX_cqloUvwaDJ_AA1__x4f7OdCkHM3zMgfdJzf-55TVUHaK514kG?width=1279&height=959&cropmode=none" alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content" style={{ background: 'rgb(31, 72, 255, 0.712)' }}>
                    <div className="media">
                    <div className="media">
                    </div>
                    <div className="media-content">
                        <p className="title is-5 ml-0" style={{ fontFamily: 'Segoe UI', fontWeight: 'bold' }}>Image Collecting WebApp</p>
                    </div>
                    </div>
                    <div className="content">Flask, HTML 5 and Bootstrap used to build this web application. storage is AWS S3 Bucket. all routine files written in Python.SQLlite database included<br />
                        <time datetime="2016-1-1">9 Oct 2022</time>
                        </div>
                        </div>
                    </div>
                    <div className="card sub_containers px-2 my-2 mx-2" style={{ width: '30%' }}>
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src="https://bnz06pap004files.storage.live.com/y4m9-OyHnaS1Bb1ad6Hja0UAS5MnWk3BQgDd4wI_8YFfxlPPv7ox685r6RQpy9ZkbOjxmIbMhM-Eq7ltgtG86qvJvnU4mvUJXNEZCbXV-Gs1chu8oe_wuolcgfOHLrMOL2_O-RST6cQIiwUMsMJaNPEJ9-FWr9ADaftK_QQ0EEpqBKGTe53hhx8r7wGH9aor_Bl?width=1279&height=959&cropmode=none" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="card-content" style={{ background: 'rgb(31, 72, 255, 0.712)' }}>
                        <div className="media">
                        <div className="media">
                        </div>
                        <div className="media-content">
                            <p className="title is-5 ml-0" style={{ fontFamily: 'Segoe UI', fontWeight: 'bold' }}>BI project for Atique technologies</p>
                        </div>
                        </div>

                        <div className="content">
                        Power BI project and used DAX queries implement required metrics to find the proper solution for supply chain failures. All slicers and KPIs and all necessary graphs included.

                        <br />
                        <time dateTime="2016-1-1">7 Nov 2022</time>
                        </div>
                    </div>
                    </div>
            </div>
    </div>
  );
}

export default Sample;
