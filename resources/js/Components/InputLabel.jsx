export default function InputLabel({
    value,
    className = "",
    important,
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `slide-up block font-medium text-sm text-gray-700 ` + className
            }
        >
            {value ? value : children}
            <span className="text-red-500 text-md">{important}</span>
        </label>
    );
}
