export default function DoodleBand({ className = "", base, doodle, offset = "0", children }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: base }}>
      <div
        className="doodle-overlay"
        style={{ backgroundColor: doodle, maskPosition: `0 ${offset}`, WebkitMaskPosition: `0 ${offset}` }}
      />
      {children}
    </div>
  );
}
