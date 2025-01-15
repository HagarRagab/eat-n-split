export default function Input({ type = "text", children, ...props }) {
    return (
        <>
            <label>{children}</label>
            <input type={type} {...props} />
        </>
    );
}
