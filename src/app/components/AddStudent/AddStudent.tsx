import { Button, Form, Input } from "antd";
import { useState } from "react";

type AddStudentProps = {
  onAdd: (name: string, firstname: string, age: number) => void;
};

export const AddStudent = ({ onAdd }: AddStudentProps) => {
  const [name, setName] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [age, setAge] = useState<number>();

  return (
    <>
      <h3>Ajouter un nouvel étudiant :</h3>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={() => onAdd(name, firstname, age!)}
        autoComplete="off"
      >
        <Form.Item
          label="Nom"
          name="name"
          rules={[{ required: true, message: "Le nom est obligatoire !" }]}
        >
          <Input onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Prénom"
          name="firstname"
          rules={[{ required: true, message: "Le prénom est obligatoire !" }]}
        >
          <Input onChange={(e) => setFirstname(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "L'âge est obligatoire !" }]}
        >
          <Input onChange={(e) => setAge(parseInt(e.target.value))} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Ajouter
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
