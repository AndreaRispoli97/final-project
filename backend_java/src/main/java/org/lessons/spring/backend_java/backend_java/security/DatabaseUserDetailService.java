package org.lessons.spring.backend_java.backend_java.security;

import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

import org.lessons.spring.backend_java.backend_java.model.User;
import org.lessons.spring.backend_java.backend_java.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class DatabaseUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<User> userAttempt = userRepository.findByUsername(username);

        if (userAttempt.isEmpty()) {
            throw new UsernameNotFoundException("No users avaible");

        }

        return new DatabaseUserDetails(userAttempt.get());
    }
}
