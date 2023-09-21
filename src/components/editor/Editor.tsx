"use client"
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
interface EditorProps {
    placeholder?: string ;
    value: string;
    onChange: (newValue: string) => void;
  }

  const Editor: React.FC<EditorProps> = ({ placeholder, value, onChange }) => {
  return (
    <SunEditor
      lang="en"
      height={"150px"}
      placeholder={placeholder}
      setOptions={{
        resizingBar: false,
        buttonList: [
          [
            "formatBlock",
            "bold",
            "underline",
            "italic",
            "strike",
            "blockquote",
            "showBlocks",
            "fontColor",
            "hiliteColor",
            "align",
            "list",
            "table",
            "link",
            "image",
            "video",
            "removeFormat",
          ],
        ],
      }}
      defaultValue={value}
      onChange={(val) => onChange(val)}
    />
  );
};

export default Editor;
