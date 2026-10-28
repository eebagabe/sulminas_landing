export const WHATSAPP = '5511942297284'
export const PHONE = '(11) 2842-5300'
export const SAC_EMAIL = 'sac@sulminaslaticinios.com.br'
export const COMERCIAL_EMAIL = 'comercial@queijosroseli.com.br'
export const ADDRESS = 'Rua Irineu José Bordon, 666, Vila Anhanguera, São Paulo/SP, CEP 05120-060'
export const PORTAL_URL = 'https://laticiniosprime169481.datasul.cloudtotvs.com.br/totvs-login/loginForm'
export const INSTAGRAM_URL = 'https://www.instagram.com/sulminas_laticinios'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/sulminas-latic%C3%ADnios/?originalSubdomain=br'

export const waLink = (text?: string) => `https://wa.me/${WHATSAPP}${text ? `?text=${encodeURIComponent(text)}` : ''}`
export const telLink = (phone: string) => `tel:+55${phone.replace(/\(.*?[a-zA-Z].*?\)/g, '').replace(/\D/g, '')}`
