import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const textarea = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            textarea.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            type={type}
            className={
                "slide-up border-gray-300 h-14 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
            ref={textarea}
        />
    );
});
