import React from "react";

import tgfs from "src/api/tgfs";

type Task = {
  id: string;
  fileName: string;
  totalSize: number;
  completedSize: number;
  status: "queuing" | "in-progress" | "completed";
  type: "download" | "upload";
  beginTime: number;
};

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

  React.useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div>
      <div>
        {Array.from(tasks.download.keys()).map((taskId: string) => {
          return <span key={taskId}>{tasks.download.get(taskId)?.id}</span>;
        })}
      </div>
      <div>
        {Array.from(tasks.upload.keys()).map((taskId: string) => {
          return <span key={taskId}>{tasks.upload.get(taskId)?.id}</span>;
        })}
      </div>
    </div>
  );
};
