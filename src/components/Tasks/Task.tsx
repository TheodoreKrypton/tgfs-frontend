import React from "react";

import {
  ListItem,
  IconButton,
  ListItemAvatar,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import {
  CancelOutlined,
  ArrowUpwardOutlined,
  ArrowDownwardOutlined,
} from "@mui/icons-material";

export type Task = {
  id: string;
  fileName: string;
  totalSize: number;
  completedSize: number;
  status: "queuing" | "in-progress" | "completed";
  type: "download" | "upload";
  beginTime: number;
};

export const TaskListItem = (props: { task: Task }) => {
  const { task } = props;

  const progress = React.useMemo(() => {
    return (task.completedSize / task.totalSize) * 100;
  }, [task.completedSize, task.totalSize]);

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="cancel">
          <CancelOutlined />
        </IconButton>
      }
    >
      <ListItemAvatar>
        {task.type === "download" ? (
          <ArrowDownwardOutlined />
        ) : (
          <ArrowUpwardOutlined />
        )}
      </ListItemAvatar>
      <ListItemText primary={task.fileName} secondary={task.id} />
      {progress < 100 ? (
        <CircularProgress
          variant="determinate"
          value={(task.completedSize / task.totalSize) * 100}
        />
      ) : (
        <></>
      )}
    </ListItem>
  );
};
