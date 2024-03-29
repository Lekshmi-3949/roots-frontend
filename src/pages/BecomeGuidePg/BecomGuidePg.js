import React from "react";
import "./BecomGuidePg.css";
import MainLayout from "../../components/MainLayout/MainLayout";
import BecomeGuideForm from "./BecomeGuideForm";
import "./BecomGuidePg.css";
import CustomTitle from "../../utils/CustomTitle";
const BecomGuidePg = () => {
  return (
    <MainLayout>
      <CustomTitle title="Become Guide" />
      <div className="guide__page__main_container">
        <img src="" alt="" className="guide__vector" />
        <div className="form__part__guide">
          <h1>Be a Guide</h1>
          <BecomeGuideForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default BecomGuidePg;
