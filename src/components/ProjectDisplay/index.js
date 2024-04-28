import { Card } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router";
import style from "./style.module.less";
import React from "react";

const { Meta } = Card;
function ProjectDisplay({ projects }) {
  const navigate = useNavigate();
  const {state} =  useLocation()
  // 处理卡片点击判断下一级类型
  const handleClick = (project) => {
    if (project.singleContent) {
      navigate(project.path, { state: {singleContent: true }});
    } else {
      navigate(project.path);
    }
  };
  return (
    <div className={style.content}>
      {state?.singleContent ? (
        <Outlet />
      ) : (
        projects.map((project, index) => {
          return (
            <Card
              className={style.card}
              key={index}
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt={project.title} src={project.img} />}
              onClick={() => handleClick(project)}
            >
              <Meta title={project.title} description={project.description} />
            </Card>
          );
        })
      )}
    </div>
  );
}

export default ProjectDisplay;
