import React from "react";

import { List } from "@mui/material";

import tgfs from "src/api/tgfs";

import { Task, TaskListItem } from "./Task";

type GetTaskResponse = {
  download: Map<string, Task>;
  upload: Map<string, Task>;
};

export const Tasks = () => {
  const [tasks, setTasks] = React.useState<GetTaskResponse>({
    download: new Map(),
    upload: new Map(),
  } as GetTaskResponse);

  React.useEffect(() => {
    (async () => {
      const rsp = await tgfs.getTasks();
      setTasks({
        download: new Map(Object.entries(rsp.download)),
        upload: new Map(Object.entries(rsp.upload)),
      });
    })();
  }, []);

  return (
    <div>
      <List dense>
        {Array.from(tasks.download.keys()).map((taskId: string) => {
          return (
            <span key={taskId}>
              <TaskListItem task={tasks.download.get(taskId)!} />
            </span>
          );
        })}
        {Array.from(tasks.upload.keys()).map((taskId: string) => {
          return (
            <span key={taskId}>
              <TaskListItem task={tasks.upload.get(taskId)!} />
            </span>
          );
        })}
      </List>
    </div>
  );
};
