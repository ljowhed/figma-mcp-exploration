<template>
  <header class="nav">
    <div class="page-pad nav-inner">
      <img
        class="logo"
        src="/icons/logo-header.png"
        width="114"
        height="36"
        alt="SDH Sekolah Dian Harapan"
      >
      <div class="nav-actions">
        <div class="bell">
          <img src="/icons/icon-bell.svg" width="24" height="24" alt="">
          <span class="badge">1</span>
        </div>
        <span class="divider" aria-hidden="true">
          <img src="/icons/icon-divider.svg" width="24" height="1" alt="">
        </span>
        <div class="profile">
          <span class="avatar">
            <img src="/icons/icon-user.svg" width="24" height="24" alt="">
          </span>
          <span class="greeting">Halo,Robert</span>
          <img class="profile-chevron" src="/icons/icon-chevron-white.svg" width="16" height="16" alt="">
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  height: 64px;
  background: var(--secondary);
  border-bottom: 0.5px solid var(--secondary-border);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo {
  width: 114px;
  height: 36px;
  object-fit: contain;
  object-position: left center;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.bell {
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background: var(--secondary-surface);
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge {
  position: absolute;
  top: -3px;
  left: 18px;
  width: 14px;
  height: 14px;
  border-radius: 100px;
  background: var(--danger);
  color: var(--white);
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.divider {
  width: 1px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.divider img {
  transform: rotate(90deg);
}

.profile {
  display: flex;
  align-items: center;
  gap: 8px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background: var(--secondary-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.greeting {
  color: var(--white);
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.12px;
  white-space: nowrap;
}

.profile-chevron {
  transform: rotate(90deg);
}

@media (max-width: 560px) {
  .greeting {
    display: none;
  }
}
</style>
