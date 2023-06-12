import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['BusinessOwner'];
  const roles = ['BusinessOwner', 'BusinessOwner', 'TeamMember', 'Manager'];
  const applicationName = 'ConstructFlow';
  const tenantName = 'organization';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `User Story 1:
As a BusinessOwner, I want to create an organization in ConstructFlow so that I can manage my construction projects and teams.

User Story 2:
As a BusinessOwner, I want to invite TeamMembers and Managers to join my organization in ConstructFlow so that they can collaborate on projects and access relevant information.

User Story 3:
As a Manager, I want to create and manage construction projects within my organization so that I can track progress, costs, and timelines.

User Story 4:
As a Manager, I want to assign TeamMembers to specific projects so that they can access project information and contribute to the project's progress.

User Story 5:
As a TeamMember, I want to view my assigned projects and tasks so that I can stay informed about my responsibilities and deadlines.

User Story 6:
As a Manager, I want to track equipment usage and staff attendance for each project so that I can optimize resource allocation and ensure project efficiency.

User Story 7:
As a Manager, I want to view and update compliance documentation for each project so that I can ensure all legal and regulatory requirements are met.

User Story 8:
As a Manager, I want to use AI and machine learning predictions to identify potential delays and cost overruns so that I can take proactive measures to keep projects on time and within budget.

User Story 9:
As a TeamMember, I want to update my progress on assigned tasks and projects so that Managers can track overall project progress and make informed decisions.

User Story 10:
As a BusinessOwner, I want to view a holistic overview of all my organization's projects in ConstructFlow so that I can make data-driven decisions and ensure the success of my construction business.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="20px" bottom="20px" zIndex={3}>
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody maxH="400px" overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application. Feel free to remove this tutorial with the{' '}
              <Box as="span" bg="yellow.300" p={1}>
                NEXT_PUBLIC_SHOW_BRIEFING
              </Box>{' '}
              environment variable.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
