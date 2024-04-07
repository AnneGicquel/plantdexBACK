import { UUID } from "crypto";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id?: UUID;

    @Column({nullable: false})
    nom_utilisateur?: string;

    @Column({nullable: false})
    mot_de_passe?: string;

    @Column({nullable: false})
    email?: string;
}