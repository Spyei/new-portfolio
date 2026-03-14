export default function Notch() {
	return (
		<>
			<div className="absolute z-50 size-25 rounded-full -top-17 -left-1 bg-background" />
			<div className="absolute z-40 w-12 h-8 top-0 left-0 bg-secondary" />

			<div className="absolute z-30 md:w-52 w-16 inset-8 rounded-3xl rounded-bl-none rounded-tl-none left-0 bg-secondary" />

			<div className="absolute z-40 w-12 h-8 left-0 bottom-0 bg-secondary" />
			<div className="absolute z-50 size-25 rounded-full -left-1 -bottom-17 bg-background" />
		</>
	);
}
