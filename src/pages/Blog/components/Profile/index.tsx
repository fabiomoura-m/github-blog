import { ExternalLink } from '../../../../components/ExternalLink';
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export function Profile() {
    return (
        <ProfileContainer>
            <ProfilePicture src="https://github.com/fabiomoura-m.png" />
            <ProfileDetails>
                <header>
                    <h1>Fabio de Moura</h1>
                    <ExternalLink href="#" text="github" />
                </header>
                <p>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas.
                    Eu viverra massa quam dignissim aenean malesuada suscipit.
                    Nunc, volutpat pulvinar vel mass.
                </p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        fabiomoura-m
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBuilding} />
                        MACH1
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserGroup} />
                        123 seguidores
                    </li>
                </ul>
            </ProfileDetails>
        </ProfileContainer>
    );
}
