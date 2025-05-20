import Tag from "./ui/tag";

export default function Tags() {
    return (
        <div className="flex flex-wrap gap-1">
            {Array(3)
                .fill("")
                .map((item, i) => (
                    <Tag
                        color="custom"
                        variant="contained"
                        customColor="#9dfaa2"
                        label={`Tag label ${i + 1}`}
                        onClick={() => {}}
                        onDelete={() => {}}
                    />
                ))}
        </div>
    );
}
