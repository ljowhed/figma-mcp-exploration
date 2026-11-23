<template>
  <footer class="footer">
    <div class="page-pad footer-inner">
      <img
        src="/icons/logo-footer.png"
        width="89"
        height="28"
        alt="SDH Sekolah Dian Harapan"
      >
      <p>©2026 Sekolah Dian Harapan. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--white);
  padding-block: 12px;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.footer img {
  width: 89px;
  height: 28px;
  object-fit: contain;
  object-position: left center;
}

.footer p {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.12px;
  color: var(--muted);
}

@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
