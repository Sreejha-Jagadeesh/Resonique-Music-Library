package com.music.MusicSystem.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "playlists")
public class Playlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String language;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true)
    private User user;
}
