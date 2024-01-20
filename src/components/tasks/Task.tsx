import styled from "styled-components";
import { colors } from "../../theme";
import { CSSProperties } from "react";
import TitleH3 from "../utils/titles/TitleH3";
import Badge from "../utils/buttons/Badge";
import type { Task } from "../../../types";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

const TaskWrapper = styled.div`
  padding: 12px;
  border: 1px solid ${colors.borderGrey};
  border-radius: 12px;
`;

const Description = styled.p<CSSProperties>`
  color: ${colors.grey};
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;

const TaskInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const TaskDate = styled.p`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

interface TaskProps {
  task: Task;
}

const Task = ({ task }: TaskProps) => {
  const statusValue =
    task.status === "New task"
      ? "newTask"
      : task.status === "In progress"
      ? "inProgress"
      : task.status === "Completed"
      ? "completed"
      : task.status;

  return (
    <TaskWrapper>
      <TitleH3>{task.title}</TitleH3>
      <Description>{task.description}</Description>
      <TaskInfoWrapper>
        <TaskDate>
          <TimerOutlinedIcon style={{ fontSize: 12 }} />
          {task.limitDate.toLocaleDateString()}
        </TaskDate>
        <Badge text={task.status} status={statusValue} />
      </TaskInfoWrapper>
    </TaskWrapper>
  );
};

export default Task;
