export default function PrimaryBtn({ children }) {
    return (
        <>
            <button
                type="button"
                className="py-2 px-4 bg-black text-white  hover:scale-110 transition"
            >
                {children}
            </button>
        </>
    );
}
