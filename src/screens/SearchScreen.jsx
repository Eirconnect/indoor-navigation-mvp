import { useState } from 'react'
import { locations, suggestedLocations } from '../data/locations'

const categoryIcons = {
  venue: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  food: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 010 8h-1" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  study: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  ),
  social: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  service: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
}

const categoryBg = {
  venue: '#EFF6FF',
  food: '#FFFBEB',
  study: '#F5F3FF',
  social: '#ECFDF5',
  service: '#F9FAFB',
}

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

export default function SearchScreen({ onSelect }) {
  const [query, setQuery] = useState('')

  const filtered = query.trim().length > 0
    ? locations.filter(loc =>
        loc.name.toLowerCase().includes(query.toLowerCase()) ||
        loc.subtitle.toLowerCase().includes(query.toLowerCase())
      )
    : null

  const listLabel = query.trim().length > 0 ? 'Results' : 'Recent & Suggested'

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <button style={styles.iconBtn} aria-label="Menu">
          <MenuIcon />
        </button>
        <span style={styles.logo}>Wayfinder</span>
        <div style={{ width: 36 }} />
      </div>

      {/* Search Bar */}
      <div style={styles.searchWrapper}>
        <div style={styles.searchBar}>
          <SearchIcon />
          <input
            style={styles.searchInput}
            type="text"
            placeholder="Search for a room, building, or location..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* List */}
      <div style={styles.listSection}>
        <span style={styles.listLabel}>{listLabel}</span>
        <div style={styles.list}>
          {filtered !== null && filtered.length === 0 && (
            <p style={styles.noResults}>No results found</p>
          )}
          {(filtered ?? suggestedLocations).map(loc => (
            <button
              key={loc.id}
              style={styles.listItem}
              onClick={() => onSelect(loc)}
            >
              <div style={{ ...styles.iconBox, background: categoryBg[loc.category] }}>
                {categoryIcons[loc.category]}
              </div>
              <div style={styles.listItemText}>
                <span style={styles.itemName}>{loc.name}</span>
                <span style={styles.itemSubtitle}>{loc.subtitle}</span>
              </div>
              <ChevronRight />
            </button>
          ))}
        </div>

        {/* All locations when not searching */}
        {filtered === null && (
          <>
            <span style={{ ...styles.listLabel, display: 'block', marginTop: 28 }}>All Locations</span>
            <div style={styles.list}>
              {locations.map(loc => (
                <button
                  key={loc.id}
                  style={styles.listItem}
                  onClick={() => onSelect(loc)}
                >
                  <div style={{ ...styles.iconBox, background: categoryBg[loc.category] }}>
                    {categoryIcons[loc.category]}
                  </div>
                  <div style={styles.listItemText}>
                    <span style={styles.itemName}>{loc.name}</span>
                    <span style={styles.itemSubtitle}>{loc.subtitle}</span>
                  </div>
                  <ChevronRight />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: '#F8F9FA',
    height: '100%',
    overflowY: 'auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 20px 12px',
    background: '#ffffff',
  },
  iconBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 6,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 8,
  },
  logo: {
    fontSize: 20,
    fontWeight: 700,
    color: '#111827',
    letterSpacing: '-0.3px',
  },
  searchWrapper: {
    padding: '16px 20px',
    background: '#ffffff',
    borderBottom: '1px solid #F3F4F6',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    background: '#F3F4F6',
    borderRadius: 14,
    padding: '12px 16px',
  },
  searchInput: {
    flex: 1,
    border: 'none',
    background: 'transparent',
    outline: 'none',
    fontSize: 15,
    color: '#111827',
    fontFamily: 'inherit',
  },
  listSection: {
    padding: '24px 20px 12px',
    flex: 1,
  },
  listLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: '0.6px',
  },
  list: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    background: '#ffffff',
    border: 'none',
    borderRadius: 16,
    padding: '14px 16px',
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    transition: 'box-shadow 0.15s',
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  listItemText: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  itemName: {
    fontSize: 15,
    fontWeight: 600,
    color: '#111827',
  },
  itemSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: 400,
  },
  noResults: {
    fontSize: 15,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 32,
  },
}
