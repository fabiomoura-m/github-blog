import { ExternalLink } from '../../../../components/ExternalLink';
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';
import { api } from '../../../../lib/axios';

interface ProfileData {
    login: string;
    bio: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company?: string;
    followers: number;
}

const username = import.meta.env.VITE_GITHUB_USERNAME;

export function Profile() {
    const [profileData, setProfileData] = useState<ProfileData>(
        {} as ProfileData
    );
    const [isLoading, setIsLoading] = useState(true);

    const getProfileData = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await api.get(`users/${username}`);
            setProfileData(response.data);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        getProfileData();
    }, []);

    return (
        <ProfileContainer>
            <ProfilePicture src={profileData.avatar_url} />
            <ProfileDetails>
                <header>
                    <h1>{profileData.name}</h1>
                    <ExternalLink
                        href={profileData.html_url}
                        text="github"
                        target="_blank"
                    />
                </header>
                <p>{profileData.bio}</p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        {profileData.login}
                    </li>
                    {profileData?.company && (
                        <li>
                            <FontAwesomeIcon icon={faBuilding} />
                            {profileData.company}
                        </li>
                    )}
                    <li>
                        <FontAwesomeIcon icon={faUserGroup} />
                        {profileData.followers} seguidores
                    </li>
                </ul>
            </ProfileDetails>
        </ProfileContainer>
    );
}
