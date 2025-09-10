export function ISPMLivePageLicensed() {
  return (
    <div className="w-full h-[calc(100vh-4rem)] overflow-auto relative">
      {/* Background Image Container */}
      <div 
        className="w-full bg-no-repeat bg-top"
        style={{
          backgroundImage: 'url(/ISPM_long.png)',
          backgroundSize: 'contain',
          minHeight: '949px',
          aspectRatio: '1382/949'
        }}
      >
        {/* No trial button overlay for licensed version */}
      </div>
    </div>
  );
}