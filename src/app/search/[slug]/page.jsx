import { providersData } from '@/lib/providers';
import ProfileContent from '@/components/profile/ProfileContent';

export default function ElectricianProfile({ params }) {
    // Extract the provider ID from the slug
    const slug = params.slug;
    const providerId = slug.split('-').pop();
    
    // Find the provider by ID or use the first one as fallback
    const provider = providersData.find(p => p.id.toString() === providerId) || providersData[0];
    
    return <ProfileContent provider={provider} />;
}