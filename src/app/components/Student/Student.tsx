import { Button, Input, Space } from "antd";
import { Student as StudentType } from "../../types/Student";
import {
  EditOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useState } from "react";

type StudentProps = {
  student: StudentType;
  onEdit: (data: Partial<StudentType>) => void;
};

export const Student = ({ student, onEdit }: StudentProps) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>(student.name);
  const [firstname, setFirstname] = useState<string>(student.firstname);
  const [age, setAge] = useState<number>(student.age);

  const edit = (_id: string) => {
    onEdit({ _id, name, firstname, age });
    setEditing(false);
  };

  return (
    <div key={student._id}>
      {editing ? (
        <Space>
          <label>
            <b>Nom :</b>
          </label>
          <Input
            defaultValue={student.name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>
            <b>Prénom :</b>
          </label>
          <Input
            defaultValue={student.firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label>
            <b>Age :</b>
          </label>
          <Input
            defaultValue={student.age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
          <Button
            type="primary"
            icon={<CheckOutlined />}
            onClick={() => edit(student._id)}
          />
          <Button
            type="primary"
            danger={true}
            icon={<CloseOutlined />}
            onClick={() => setEditing(false)}
          />
        </Space>
      ) : (
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
      )}
    </div>
  );
};
