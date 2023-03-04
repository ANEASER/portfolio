import React from 'react';
import 'bulma/css/bulma.css';
import '../App.css';

import ML from '../uploads/ML.png';
import web from '../uploads/web.png';
import BI from '../uploads/BI.png';

function Sample() {

  return (
    <div>
      <div id="samples" className="my-3" style={{ color: 'rgb(31, 72, 255)', textAlign: 'center', fontSize: '220%' }}>SAMLE PROJECTS</div>
            <div className="main_container mt-1" style={{ margin: '1em 1em 1em 1em' }}>
            <div className="card sub_containers px-2 my-2 mx-2" style={{ width: '30%' }}>
                <div className="card-image">
                <figure className="image is-4by3">s
                    <img src={ML} alt="Placeholder image" />
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
                    <img src={web} alt="Placeholder image" />
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
                        <img src={BI} alt="Placeholder image" />
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
