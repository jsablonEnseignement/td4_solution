import { Button, Space } from "antd";
import { Student as StudentType } from "../../types/Student";
import {
  EditOutlined
} from "@ant-design/icons";
import { useState } from "react";

type StudentProps = {
  student: StudentType;
};

export const Student = ({ student }: StudentProps) => {
  const [editing, setEditing] = useState<boolean>(false);
  
  return (
    <div key={student._id}>
      <Space>
          <label>
            <b>Nom :</b>
          </label>
          {student.name}
          <label>
            <b>Prénom :</b>
          </label>
          {student.firstname}
          <label>
            <b>Age :</b>
          </label>
          {student.age}
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => setEditing(true)}
          />
        </Space>
    </div>
  );
};
